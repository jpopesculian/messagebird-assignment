import { observable, action, computed, flow } from 'mobx'
import { forEach, values } from 'lodash'

export class MessagesStore {
  @observable loading = true
  @observable error = false
  @observable messages = {}
  @observable subscription = null

  constructor() {
    this.init()
  }

  doQuery() {
    return new Promise((resolve, reject) => reject())
  }

  doSubscription() {
    return new Promise((resolve, reject) => reject())
  }

  @action init = () => {
    this.clear()
    this.load()
    this.subscribe()
  }

  @action load = flow(function*() {
    this.loading = true
    try {
      const { data } = yield this.doQuery()
      this.loading = false
      forEach(message => this.add(message), data.messages)
      return this.messages
    } catch (error) {
      this.loading = false
      return (this.error = error)
    }
  })

  @action clear = () => (this.messages = {})

  @action subscribe = () => {
    this.unsubscribe()
    return (this.subscription = this.doSubscription().subscribe(
      ({ data }) => this.add(data.messageCreated),
      error => console.warn(error),
      () => (this.subscription = null)
    ))
  }

  @action unsubscribe = () => {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  @action add = message => (this.messages[message.id] = message)

  @computed get messageList() {
    return values(this.messages)
  }
}
