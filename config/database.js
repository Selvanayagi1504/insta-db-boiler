const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('dajbuu54nbotmo', 
                                'qyyndnsojozmbz', 
                                'edfb96e964c7d774479f424bad93bfbbdf71045619d06909a4ca4b92315d2d5a', {
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

