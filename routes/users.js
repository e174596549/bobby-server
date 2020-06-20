const router = require('koa-router')()
const {signUp} = require('../controller/user_controller')

router.prefix('/users')

router.post('/signUp', signUp)

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router
