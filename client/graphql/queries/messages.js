import gql from 'graphql-tag'

export default gql`
  query messages($direction: direction!) {
    messages(direction: $direction) {
      id,
      body,
      direction
    }
  }
`
