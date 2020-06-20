const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router');
const router = new Router();
const koaLogger = require('koa-logger')
const {logger} = require('./config/config')

const home = require('./routes/home')
const users = require('./routes/users')

// error handler
onerror(app)

// middleware
app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(koaLogger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(home.routes())
app.use(users.routes())
app.use(router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  logger.error('server error', err, ctx)
});

module.exports = app
