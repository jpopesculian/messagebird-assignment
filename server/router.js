const router = require('koa-router')()

router.get('/hello', hello)

async function hello(ctx) {
  ctx.body = 'hello world'
}

module.exports = router
