const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')
const MessageType = require('../types/message')
const create = require('../../api/create')
const insert = require('../../db/insert')
const pubsub = require('../pubsub')
const { MESSAGE_CREATED } = require('../pubsub/topics')

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
      originator: number,
      recipients: [number],
      body
    })
    insert(message)
    pubsub.publish(MESSAGE_CREATED, { messageCreated: message })
    return message
  }
}
