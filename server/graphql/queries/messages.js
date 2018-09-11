const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLBoolean
} = require('graphql')
const MessageType = require('../types/message')
const directionType = require('../types/direction')
const list = require('../../db/list')

module.exports = {
  type: new GraphQLObjectType({
    name: 'messages',
    fields: {
      messages: {
        type: new GraphQLList(MessageType)
      },
      more: {
        type: GraphQLBoolean
      }
    }
  }),
  description: 'MessageBird messages',
  args: {
    direction: {
      type: new GraphQLNonNull(directionType)
    },
    skip: {
      type: GraphQLInt
    },
    limit: {
      type: GraphQLInt
    }
  },
  resolve: async (rootValue, { direction, skip, limit }) => {
    console.log('happens')
    return list({ direction, skip, limit })
  }
}
