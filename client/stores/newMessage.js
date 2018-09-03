import { observable, action, flow } from 'mobx'
import createMessageMutation from '../graphql/mutations/createMessage'
import messagesStore from './messages'
import client from '../apollo'
import { forEach, values } from 'lodash'

class NewMessageStore {
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
      messagesStore.add(data.createMessage)
    } catch (error) {
      this.sending = false
      return (this.error = error)
    }
  })
}

export default new NewMessageStore()
