const find = require('../db/find')
const update = require('../db/update')
const read = require('../api/read')
const pubsub = require('../graphql/pubsub')
const { MESSAGE_SENT } = require('../graphql/pubsub/topics')

module.exports = async ctx => {
  const params = ctx.query
  const old = await find(params.reference)
  const message = await read(old.id)
  await update(old._id, message)
  pubsub.publish(MESSAGE_SENT, { messageSent: message })
  ctx.status = 200
}
