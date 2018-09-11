const { messages } = require('./db')

module.exports = async (_id, message) =>
  messages().updateOne({ _id }, { $set: message })
