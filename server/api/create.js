const client = require('./client')
const uuid = require('uuid/v4')

module.exports = options => {
  const args = Object.assign(
    { originator: process.env.ORIGINATOR, reference: uuid() },
    options
  )
  return new Promise((resolve, reject) =>
    client.messages.create(args, (err, data) => {
      if (err != null) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  )
}
