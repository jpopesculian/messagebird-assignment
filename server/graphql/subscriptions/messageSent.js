const MessageType = require('../types/message')
const pubsub = require('../pubsub')
const { MESSAGE_SENT } = require('../pubsub/topics')

module.exports = {
  type: MessageType,
  description: 'MessageBird message sent',
  subscribe: () => pubsub.asyncIterator(MESSAGE_SENT)
}
