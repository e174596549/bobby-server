const {signUp} = require('../service/user_service')
const errorCode = require('../lib/error_code')
const {responseBody} = require('../helper/controller_helper')

class UserController {
    async signUp(ctx) {
        try {
            const body = await signUp(ctx);
            responseBody(ctx, body)
        } catch(e) {
            errorCode.sendErrorBody(ctx, e)
        }
    }
}

module.exports = new UserController()