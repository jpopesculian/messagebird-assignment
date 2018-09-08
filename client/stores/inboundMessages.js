import { MessagesStore } from './messages'

import client from '../apollo'
import messagesQuery from '../graphql/queries/messages'
import messageReceivedSubscription
  from '../graphql/subscriptions/messageReceived'

export class InboundMessagesStore extends MessagesStore {
  doQuery() {
    return client.query({
      query: messagesQuery,
      variables: { direction: 'received' }
    })
  }

  doSubscription() {
    return client.subscribe({ query: messageReceivedSubscription })
  }
}

export default new InboundMessagesStore()
