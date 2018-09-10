import gql from 'graphql-tag'

export default gql`
  query messages($direction: direction!) {
    messages(direction: $direction) {
      id,
      body,
      direction,
      originator,
      body,
      validity,
      scheduledDatetime,
      createdDatetime,
      recipients {
        items {
          recipient,
          status,
          statusDatetime
        }
      }
    }
  }
`
