'use strict';
var Sequelize = require('sequelize')
const db = require('../config/database')
var instaUser = db.sequelize.define('instaUser', {
  moboremail: Sequelize.STRING,
  fname: Sequelize.STRING,
  uname: Sequelize.STRING,
  pass: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  website: Sequelize.STRING,
  bio: Sequelize.STRING,
  gender: Sequelize.STRING,
  profile: Sequelize.STRING,
  posts: Sequelize.TEXT,
  fav: Sequelize.TEXT
})
db.sequelize.sync().then(function() {
})

module.exports = instaUser
