import { observable, action, flow, computed } from 'mobx'
import createMessageMutation from '../graphql/mutations/createMessage'
import outboundMessagesStore from './outboundMessages'
import client from '../apollo'
import PhoneNumber from 'awesome-phonenumber'
import { forEach, values, isEmpty } from 'lodash'

export class NewMessageStore {
  @observable sending = false
  @observable error = null
  @observable body = 'test message'
  @observable number = '+19165854267'
  @observable numberError = null
  @observable visible = false

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
      this.clear()
      this.hide()
      outboundMessagesStore.add(data.createMessage)
    } catch (error) {
      this.sending = false
      return (this.error = error)
    }
  })

  @action setNumber = number => {
    this.error = null
    this.numberError = null
    this.number = number
  }

  @action validateNumber = () => {
    const pn = new PhoneNumber(this.number, 'US')
    if (!pn.isValid()) {
      return (this.numberError = 'Invalid phone number')
    }
    this.number = pn.getNumber()
  }

  @action setBody = body => {
    this.error = null
    this.body = body
  }

  @action show = () => {
    this.visible = true
  }

  @action hide = () => {
    this.visible = false
  }

  @action clear = () => {
    this.error = null
    this.numberError = null
    this.sending = false
    this.number = ''
    this.body = ''
  }

  @computed get valid() {
    return !(this.error ||
      this.numberError ||
      isEmpty(this.number) ||
      isEmpty(this.body))
  }

  @computed get errorString() {
    return this.error ? this.error.toString() : null
  }
}

export default new NewMessageStore()
