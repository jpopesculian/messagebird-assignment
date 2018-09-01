const MessageType = require('../types/message')
const pubsub = require('../pubsub')
const { MESSAGE_CREATED } = require('../pubsub/topics')

module.exports = {
  type: MessageType,
  description: 'MessageBird message created',
  subscribe: () => pubsub.asyncIterator(MESSAGE_CREATED)
}
