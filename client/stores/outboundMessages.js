import { action } from 'mobx'
import { MessagesStore } from './messages'

import client from '../apollo'
import messagesQuery from '../graphql/queries/messages'
import messageSentSubscription from '../graphql/subscriptions/messageSent'

export class OutboundMessagesStore extends MessagesStore {
  doQuery() {
    return client.query({
      query: messagesQuery,
      variables: { direction: 'outbound', skip: this.messageList.length }
    })
  }

  doSubscription() {
    return client.subscribe({ query: messageSentSubscription })
  }

  @action onSubscriptionData({ messageSent }) {
    this.add(messageSent)
  }
}

export default new OutboundMessagesStore()
