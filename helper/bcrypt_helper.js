const bcrypt = require('bcrypt');

class BcryptHelper {
    static saltRounds = 10;

    static async genSalt() {
        return await bcrypt.genSalt(BcryptHelper.saltRounds)
    }

    async getHash(password) {
        const salt = await BcryptHelper.genSalt()
        return await bcrypt.hash(password, salt)
    }

    async compare(password, hash) {
        await bcrypt.compare(password, hash)
    }
}

module.exports = new BcryptHelper()