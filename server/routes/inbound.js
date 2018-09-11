const read = require('../api/read')
const insert = require('../db/insert')
const pubsub = require('../graphql/pubsub')
const { MESSAGE_RECEIVED } = require('../graphql/pubsub/topics')

module.exports = async ctx => {
  const params = ctx.request.body
  const message = await read(params.id)
  await insert(message)
  pubsub.publish(MESSAGE_RECEIVED, { messageReceived: message })
  ctx.status = 200
}
