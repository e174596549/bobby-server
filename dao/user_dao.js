const UserModel = require('../model/user_model')
const {logger} = require('../config/config')
const errorCode = require('../lib/error_code')

class UserDAO {
    async create(name) {
        let result;
        try {
            result = await UserModel.create({name})
        } catch(e) {
            logger.error("UserDAO.create fail:", e)
            errorCode.throwError(errorCode.USER_MODEL_CREATE_ERROR)
        }
        logger.debug("UserModel.create result:", result)
        return result.dataValues;
    }
}

module.exports = new UserDAO();