const { messages } = require('./db')

module.exports = async reference => messages().findOne({ reference })
