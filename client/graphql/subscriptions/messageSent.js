import gql from 'graphql-tag'

export default gql`
  subscription messageSent {
    messageSent {
      id,
      body,
      direction
    }
  }
`
