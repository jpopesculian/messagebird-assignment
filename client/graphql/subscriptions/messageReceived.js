import gql from 'graphql-tag'

export default gql`
  subscription messageReceived {
    messageReceived {
      id,
      body,
      direction
    }
  }
`
