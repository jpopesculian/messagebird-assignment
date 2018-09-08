const { messages } = require('./db')

module.exports = async query => messages().find(query).toArray()
