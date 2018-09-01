const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLEnumType
} = require('graphql')
const recipientsType = require('./recipients')

const directionType = new GraphQLEnumType({
  name: 'direction',
  values: {
    sent: { value: 'mt' },
    received: { value: 'mo' }
  }
})

const typeType = new GraphQLEnumType({
  name: 'type',
  values: {
    sms: { value: 'sms' },
    binary: { value: 'binary' },
    flash: { value: 'flash' }
  }
})

const mclassType = new GraphQLEnumType({
  name: 'mclass',
  values: {
    flash: { value: 0 },
    normal: { value: 1 },
    unknown1: { value: 2 },
    unknown2: { value: 3 }
  }
})

const typeDetailsType = new GraphQLObjectType({
  name: 'typeDetails',
  fields: {
    udh: { type: GraphQLString }
  }
})

module.exports = new GraphQLObjectType({
  name: 'message',
  description: 'MessageBird SMS',
  fields: {
    id: { type: GraphQLID },
    href: { type: GraphQLString },
    direction: { type: directionType },
    type: { type: typeType },
    originator: { type: GraphQLString },
    body: { type: GraphQLString },
    reference: { type: GraphQLString },
    reportUrl: { type: GraphQLString },
    validity: { type: GraphQLString },
    typeDetails: { type: GraphQLString },
    dataencoding: { type: GraphQLString },
    scheduledDatetime: { type: GraphQLString },
    createdDatetime: { type: GraphQLString },
    recipients: { type: recipientsType }
  }
})
