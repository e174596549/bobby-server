const AuthModel = require('../model/auth_model')
const {logger} = require('../config/config')
const errorCode = require('../lib/error_code')

class AuthDAO {
    async create(authInfo) {
        let result;
        try {
            result = await AuthModel.create(authInfo)
        } catch(e) {
            logger.error("AuthDAO.create fail:", e)
            errorCode.throwError(errorCode.AUTH_MODEL_CREATE_ERROR)
        }
        logger.debug("AuthModel.create result:", result)
        return result.dataValues;
    }

    async findAll(query) {
        let result;
        try {
            result = await AuthModel.findAll({
                where: query
            })
        } catch(e) {
            logger.error("AuthDAO.findAll fail:", e)
            errorCode.throwError(errorCode.AUTH_MODEL_FIND_ERROR)
        }
        logger.debug("AuthModel.findAll result:", result)
        return result;
    }
}

module.exports = new AuthDAO();