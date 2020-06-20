const {sequelize, Sequelize} = require('../config/config')

const UserModel = sequelize.define('user', {
    // 属性
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize,
    createdAt: 'gmt_created',
    updatedAt: 'gmt_modified'
});

module.exports = UserModel