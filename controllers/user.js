var sequelize = require("sequelize")
const db = require('./../config/database')
const User = require('./../models/insta')
// const User=models.user
class SampleController {

    //login
    login(uname,pass){
        return new Promise((resolve,reject)=>{
            try{
                User.findOne({ where: { moboremail: uname ,pass:pass} }).then(function(res){
                    // var passwordIsValid = bcrypt.compareSync(
                    //     pass,
                    //     res.pass
                    // );
                    // if(passwordIsValid){
                        resolve("success");
                    // }
                })
            }catch(err){
                reject(err)
            }
        })
    }

    //get particluar user
    getuser(data){
        return new Promise((resolve, reject) => {
            try {
                User.findOne({ where: { moboremail: data } }).then(function(res){
                    resolve(res);
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    //get all users
    getallusers() {
        return new Promise((resolve, reject) => {
            try {
                User.findAll().then(function (res) {
                    console.log(res);
                    resolve(res)
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //update changes in posts
    changepost(data,email){
        return new Promise((resolve, reject) => {
            try {
                User.update({ posts: data}, {
                    where: {
                        moboremail:email
                    }
                    }).then(function(){
                        resolve('success');
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //change fav
    changefav(data,email){
        return new Promise((resolve, reject) => {
            try {
                User.update({ fav: data}, {
                    where: {
                        moboremail:email
                    }
                    }).then(function(){
                        resolve('success');
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //change password
    changepass(data,email){
        return new Promise((resolve, reject) => {
            try {
                User.update({ pass: data}, {
                    where: {
                        moboremail:email
                    }
                    }).then(function(){
                        resolve('success');
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //change poto
    changepoto(data,email){
        return new Promise((resolve, reject) => {
            try {

                User.update({ profile: data}, {
                    where: {
                        moboremail:email
                    }
                    }).then(function(){
                        resolve('success');
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //edit details
    edit(data,email){
        return new Promise((resolve, reject) => {
            try {
                let nfname,nuname,nphone,nemail,nwebsite,nbio,ngender;
                data.forEach(k=>{
                    nfname= k.fname;
                    nuname= k.uname;
                    nphone= k.phone;
                    nemail= k.email;
                    nwebsite= k.website;
                    nbio= k.bio;
                    ngender= k.gender;
                })
                User.update({fname:nfname,uname:nuname,phone:nphone,email:nemail,website:nwebsite,bio:nbio,gender:ngender}, {
                    where: {
                        moboremail:email
                    }
                    }).then(function(){
                        resolve('success');
                })

            } catch (err) {
                reject(err)
            }
        })
    }

    //saveuser
    saveuser(data){
        return new Promise((resolve, reject) => {
            try {
                var moboremail,fname,uname,pass,profile,gender,bio,website,posts,fav,email,phone;
                data.forEach(k=>{
                    moboremail=k.moboremail;
                    fname=k.fname;
                    uname=k.uname;
                    pass=k.pass;
                    profile=k.profile;
                    gender=k.gender;
                    bio=k.bio;
                    website=k.website;
                    posts=k.posts;
                    fav=k.fav;
                    email=k.email;
                    phone=k.phone;
                })
                User.create({
                    moboremail: moboremail,
                    fname: fname,
                    uname: uname,
                    pass: pass,
                    phone: phone,
                    email: email,
                    website: website,
                    bio: bio,
                    gender: gender,
                    profile: profile,
                    posts:posts,
                    fav: fav
                }).then(function (sdepold) {
                    resolve("success")
                })

            } catch (err) {
                reject(err)
            }
        })
    }
}


module.exports = () => {
    return new SampleController()
}