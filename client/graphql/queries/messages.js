import gql from 'graphql-tag'

export default gql`
  query messages($direction: direction!, $skip: Int) {
    messages(direction: $direction, skip: $skip) {
      messages {
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
      },
      more
    },
  }
`
