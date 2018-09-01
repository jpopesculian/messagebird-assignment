import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

export default () => (
  <ApolloProvider client={client}>
    <div>Hello</div>
  </ApolloProvider>
)
