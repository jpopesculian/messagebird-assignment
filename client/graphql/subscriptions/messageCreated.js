import gql from 'graphql-tag'

export default gql`
  subscription messageCreated {
    messageCreated {
      id,
      body,
      direction
    }
  }
`
