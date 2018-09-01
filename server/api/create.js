const client = require('./client')

module.exports = options =>
  new Promise((resolve, reject) =>
    client.messages.create(options, (err, data) => {
      if (err != null) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  )
