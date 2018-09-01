const { GraphQLList } = require('graphql')
const MessageType = require('../types/message')
const list = require('../../db/list')

module.exports = {
  type: new GraphQLList(MessageType),
  description: 'MessageBird messages',
  resolve: async () => list()
}
