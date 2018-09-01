const { GraphQLObjectType } = require('graphql')
const messages = require('../queries/messages')

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    messages
  }
})
