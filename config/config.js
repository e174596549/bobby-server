'use strict'

const log4js = require('log4js')
const logger = log4js.getLogger();
const Sequelize = require('sequelize');
const {
    mysql: {
        host,
        account,
        password,
        dbname
    }
} = require('./config.json')

logger.level = "debug";

//方法1:单独传递参数
const sequelize = new Sequelize(dbname, account, password, {
    host,
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    logger,
    port: '3001',
    sequelize,
    Sequelize
}