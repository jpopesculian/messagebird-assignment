const { ApolloServer, gql } = require('apollo-server-koa')
const schema = require('./schema')

module.exports = new ApolloServer({ schema, subscriptions: '/' })
