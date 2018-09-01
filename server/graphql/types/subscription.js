const { GraphQLObjectType } = require('graphql')
const messageCreated = require('../subscriptions/messageCreated')

module.exports = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    messageCreated
  }
})
