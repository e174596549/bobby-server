const {create: createUser} = require('../dao/user_dao')
const {create: createAuth, findAll: queryAuth} = require('../dao/auth_dao')
const bcryptHelper = require('../helper/bcrypt_helper')
const errorCode = require('../lib/error_code')

class UserService {
    async signUp(ctx) {
        const {name, account, password} = ctx.request.body
        const authList = await queryAuth({
            identity_type: 'account',
            identifier: account
        })
        if (authList.length !== 0) {
            errorCode.throwError(errorCode.AUTH_IDENTIFIER_EXIST);
        }
        const user = await createUser(name);
        const credential = await bcryptHelper.getHash(password)
        await createAuth({
            user_id: user.id,
            identity_type: 'account',
            identifier: account,
            credential
        })
        return user
    }
}

module.exports = new UserService()