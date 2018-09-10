import gql from 'graphql-tag'

export default gql`
  subscription messageReceived {
    messageReceived {
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
