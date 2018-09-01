const { MongoClient } = require('mongodb')
const test = require('assert')

// Connection url
const url = 'mongodb://localhost:27017'
// Database Name
const dbName = 'messagebird'

let _client = null
let _db = null

const connect = () =>
  new Promise((resolve, reject) =>
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
      if (err) {
        return reject(err)
      }
      _client = client
      _db = client.db(dbName)
      resolve()
    })
  )

const disconnect = () => client.close()

const messages = () => _db.collection('messages')
const db = () => _db
const client = () => _client

module.exports = {
  client,
  db,
  connect,
  disconnect,
  messages
}
