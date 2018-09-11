const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')
const MessageType = require('../types/message')
const create = require('../../api/create')
const insert = require('../../db/insert')
const pubsub = require('../pubsub')
const { MESSAGE_SENT } = require('../pubsub/topics')

module.exports = {
  type: MessageType,
  args: {
    number: {
      type: new GraphQLNonNull(GraphQLString)
    },
    body: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (rootValue, { number, body }) => {
    const message = await create({
      recipients: [number],
      body
    })
    insert(message)
    pubsub.publish(MESSAGE_SENT, { messageSent: message })
    return message
  }
}
