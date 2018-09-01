const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLList
} = require('graphql')

const statusType = new GraphQLEnumType({
  name: 'status',
  values: {
    scheduled: { value: 'scheduled' },
    sent: { value: 'sent' },
    buffered: { value: 'buffered' },
    delivered: { value: 'delivered' },
    expired: { value: 'expired' },
    deliveryFailed: { value: 'deliver_failed' }
  }
})

const itemType = new GraphQLObjectType({
  name: 'item',
  fields: {
    recipient: { type: GraphQLInt },
    status: { type: statusType },
    statusDatetime: { type: GraphQLString }
  }
})

module.exports = new GraphQLObjectType({
  name: 'recipients',
  fields: {
    totalCount: { type: GraphQLInt },
    totalSentCount: { type: GraphQLInt },
    totalDeliveredCount: { type: GraphQLInt },
    totalDeliveryFailedCount: { type: GraphQLInt },
    items: { type: new GraphQLList(itemType) }
  }
})
