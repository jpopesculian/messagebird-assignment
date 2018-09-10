import gql from 'graphql-tag'

export default gql`
  mutation createMessage(
    $number: String!,
    $body: String!
  ) {
    createMessage(
      number: $number,
      body: $body
    ) {
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
