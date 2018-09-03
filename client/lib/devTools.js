import _ from 'lodash/fp'
import client from '../apollo'
import messagesStore from '../stores/messages'
import newMessageStore from '../stores/newMessage'

window._ = _
window.apollo = client
window.messages = messagesStore
window.newMessage = newMessageStore
window.readState = store => JSON.parse(JSON.stringify(store))
Object.defineProperty(window, 'state', {
  get: () => ({
    messages: window.readState(messagesStore),
    newMessage: window.readState(newMessageStore)
  })
})
