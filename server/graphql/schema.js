const { GraphQLSchema } = require('graphql')
const query = require('./types/query')
const mutation = require('./types/mutation')
const subscription = require('./types/subscription')

module.exports = new GraphQLSchema({
  query,
  mutation,
  subscription
})
