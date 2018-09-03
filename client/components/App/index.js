import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from '../../apollo'
import Main from '../Main'
import resetStyle from './reset.css'
import style from './index.css'

export default () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
)
