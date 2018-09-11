import { action } from 'mobx'
import { MessagesStore } from './messages'

import client from '../apollo'
import messagesQuery from '../graphql/queries/messages'
import messageReceivedSubscription
  from '../graphql/subscriptions/messageReceived'

export class InboundMessagesStore extends MessagesStore {
  doQuery() {
    return client.query({
      query: messagesQuery,
      variables: { direction: 'inbound' }
    })
  }

  doSubscription() {
    return client.subscribe({ query: messageReceivedSubscription })
  }

  @action onSubscriptionData({ messageReceived }) {
    this.add(messageReceived)
  }
}

export default new InboundMessagesStore()
