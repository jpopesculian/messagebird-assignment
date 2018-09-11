const { GraphQLEnumType } = require('graphql')

module.exports = new GraphQLEnumType({
  name: 'direction',
  values: {
    outbound: { value: 'mt' },
    inbound: { value: 'mo' }
  }
})
