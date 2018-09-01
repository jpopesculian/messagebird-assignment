const client = require('./client')

module.exports = id =>
  new Promise((resolve, reject) =>
    client.messages.read(id, (err, data) => {
      if (err != null) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  )
