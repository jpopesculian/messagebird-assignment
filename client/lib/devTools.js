import _ from 'lodash/fp'
import client from '../apollo'
import inboundMessagesStore from '../stores/inboundMessages'
import outboundMessagesStore from '../stores/outboundMessages'
import newMessageStore from '../stores/newMessage'
import navigationStore from '../stores/navigation'
import clockStore from '../stores/clock'

window._ = _

window.apollo = client

window.inbound = inboundMessagesStore
window.outbound = outboundMessagesStore
window.newMessage = newMessageStore
window.clock = clockStore
window.nav = navigationStore

window.readState = store => JSON.parse(JSON.stringify(store))
Object.defineProperty(window, 'state', {
  get: () => ({
    inbound: window.readState(inboundMessagesStore),
    outbound: window.readState(outboundMessagesStore),
    newMessage: window.readState(newMessageStore),
    navigation: window.readState(navigationStore),
    clock: window.readState(clockStore)
  })
})
