const router = require('koa-router')()

router.get('/status', require('./status'))
router.post('/inbound', require('./inbound'))

module.exports = router
