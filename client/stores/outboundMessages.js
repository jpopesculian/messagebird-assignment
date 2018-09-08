import { MessagesStore } from './messages'

import client from '../apollo'
import messagesQuery from '../graphql/queries/messages'
import messageSentSubscription from '../graphql/subscriptions/messageSent'

export class OutboundMessagesStore extends MessagesStore {
  doQuery() {
    return client.query({
      query: messagesQuery,
      variables: { direction: 'sent' }
    })
  }

  doSubscription() {
    return client.subscribe({ query: messageSentSubscription })
  }
}

export default new OutboundMessagesStore()
