import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'
import Home from './components/Home'

export default () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
)
