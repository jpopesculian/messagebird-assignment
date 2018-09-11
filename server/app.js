const logger = require('koa-logger')
const koaBody = require('koa-body')

const router = require('./routes')
const static = require('./static')
const graphql = require('./graphql')

const Koa = require('koa')
const app = new Koa()

// middleware

app.use(logger())
app.use(koaBody())
app.use(router.routes())
graphql.applyMiddleware({ app })
app.use(static)

module.exports = app
