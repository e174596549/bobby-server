class ControllerHelper {
    responseBody(ctx, body) {
        ctx.body = {
            code: 0,
            result: body
        }
    }
}

module.exports = new ControllerHelper()