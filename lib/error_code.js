class MyError extends Error {
    constructor(code, msg) {
        super(msg);
        this.code = code
    }
}

class ErrorCode {
    static BASE_CODE_PARAM = 1000
    static BASE_CODE_LOGICAL = 2000
    static BASE_CODE_FATAL = 3000

    PARAM_ERROR = { code: ErrorCode.BASE_CODE_PARAM + 1, msg: '参数错误'}

    USER_MODEL_CREATE_ERROR = { code: ErrorCode.BASE_CODE_LOGICAL + 1, msg: '用户账户信息创建失败'}
    AUTH_MODEL_CREATE_ERROR = { code: ErrorCode.BASE_CODE_LOGICAL + 2, msg: '用户登录信息创建失败'}
    AUTH_MODEL_FIND_ERROR = { code: ErrorCode.BASE_CODE_LOGICAL + 3, msg: '用户登录信息查询失败'}
    AUTH_IDENTIFIER_EXIST = { code: ErrorCode.BASE_CODE_LOGICAL + 4, msg: '用户账户信息已存在'}

    throwError(code) {
        throw new MyError(code.code, code.msg)
    }

    sendErrorBody(ctx, code) {
        ctx.body = {
            code: code.code,
            message: code.message
        }
    }
}

module.exports = new ErrorCode()