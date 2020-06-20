const {sequelize, Sequelize} = require('../config/config')

const UserModel = sequelize.define('auth', {
    // 用户 id
    user_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    identity_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    identifier: {
        type: Sequelize.STRING,
        allowNull: false
    },
    credential: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    createdAt: 'gmt_created',
    updatedAt: 'gmt_modified'
});

module.exports = UserModel