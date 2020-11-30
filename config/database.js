const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('d4d3rbe1mlcp76', 
                                'taheaqrgyfjipe', 
                                'f3eb0d51bcc3e189b61b0cca00088182fc9dd027285a69743ad9ed36585bff39', {
  host: 'ec2-3-210-23-22.compute-1.amazonaws.com',
  port:5432,
  dialect: 'postgres',
  logging: console.log,
  freezeTableName: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

