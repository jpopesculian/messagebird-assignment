const logger = require('koa-logger')
const koaBody = require('koa-body')
const serve = require('koa-static')

const router = require('./router')
const graphql = require('./graphql')

const Koa = require('koa')
const app = new Koa()

// middleware

app.use(logger())
app.use(koaBody())
app.use(router.routes())
graphql.applyMiddleware({ app })
app.use(serve('./public'))

module.exports = app
