const { GraphQLList, GraphQLNonNull } = require('graphql')
const MessageType = require('../types/message')
const directionType = require('../types/direction')
const list = require('../../db/list')

module.exports = {
  type: new GraphQLList(MessageType),
  description: 'MessageBird messages',
  args: {
    direction: {
      type: new GraphQLNonNull(directionType)
    }
  },
  resolve: async (rootValue, { direction }) => {
    return list({ direction })
  }
}
