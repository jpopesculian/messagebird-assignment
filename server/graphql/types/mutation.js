const { GraphQLObjectType, GraphQLString } = require('graphql')
const createMessage = require('../mutations/createMessage')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createMessage
  }
})
