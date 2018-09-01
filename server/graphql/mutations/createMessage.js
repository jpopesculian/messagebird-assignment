const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')
const MessageType = require('../types/message')
const create = require('../../api/create')
const insert = require('../../db/insert')

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
    return message
  }
}
