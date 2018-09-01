const { messages } = require('./db')

module.exports = async message => messages().insertOne(message)
