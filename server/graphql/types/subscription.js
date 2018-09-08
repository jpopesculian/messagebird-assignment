const { GraphQLObjectType } = require('graphql')
const messageSent = require('../subscriptions/messageSent')
const messageReceived = require('../subscriptions/messageReceived')

module.exports = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    messageSent,
    messageReceived
  }
})
