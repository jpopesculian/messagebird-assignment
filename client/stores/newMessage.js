import { observable, action, flow } from 'mobx'
import createMessageMutation from '../graphql/mutations/createMessage'
import outboundMessagesStore from './outboundMessages'
import client from '../apollo'
import { forEach, values } from 'lodash'

export class NewMessageStore {
  @observable sending = false
  @observable error = false
  @observable body = 'test message'
  @observable number = '+19165854267'

  @action send = flow(function*() {
    this.sending = true
    try {
      const { data } = yield client.mutate({
        mutation: createMessageMutation,
        variables: {
          number: this.number,
          body: this.body
        }
      })
      this.sending = false
      outboundMessagesStore.add(data.createMessage)
    } catch (error) {
      this.sending = false
      return (this.error = error)
    }
  })
}

export default new NewMessageStore()
