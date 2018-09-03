import _ from 'lodash/fp'
import client from '../apollo'
import messagesStore from '../stores/messages'
import newMessageStore from '../stores/newMessage'
import navigationStore from '../stores/navigation'

window._ = _

window.apollo = client

window.messages = messagesStore
window.newMessage = newMessageStore
window.nav = navigationStore

window.readState = store => JSON.parse(JSON.stringify(store))
Object.defineProperty(window, 'state', {
  get: () => ({
    messages: window.readState(messagesStore),
    newMessage: window.readState(newMessageStore),
    navigation: window.readState(navigationStore)
  })
})
