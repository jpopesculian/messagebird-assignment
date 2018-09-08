const MessageType = require('../types/message')
const pubsub = require('../pubsub')
const { MESSAGE_RECEIVED } = require('../pubsub/topics')

module.exports = {
  type: MessageType,
  description: 'MessageBird message received',
  subscribe: () => pubsub.asyncIterator(MESSAGE_RECEIVED)
}
