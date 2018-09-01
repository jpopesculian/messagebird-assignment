const SubscriptionServer = require('subscriptions-transport-ws')
const { execute, subscribe } = require('graphql')
const schema = require('./schema')

module.exports = ctx => {
  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: ctx.websocket }
  )
}
