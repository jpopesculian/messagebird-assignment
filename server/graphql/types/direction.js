const { GraphQLEnumType } = require('graphql')

module.exports = new GraphQLEnumType({
  name: 'direction',
  values: {
    sent: { value: 'mt' },
    received: { value: 'mo' }
  }
})
