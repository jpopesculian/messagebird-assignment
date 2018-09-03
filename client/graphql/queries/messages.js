import gql from 'graphql-tag'

export default gql`
  query messages {
    messages {
      id,
      body,
      direction
    }
  }
`
