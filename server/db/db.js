const { MongoClient } = require('mongodb')
const test = require('assert')

const url = process.env.MONGO_URL
const dbName = process.env.MONGO_DB
const MAX_ATTEMPTS = 10
const ATTEMPT_DELAY = 1000

let _client = null
let _db = null

const attemptConnect = () =>
  new Promise((resolve, reject) =>
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
      if (err) {
        return setTimeout(() => reject(err), ATTEMPT_DELAY)
      }
      _client = client
      _db = client.db(dbName)
      resolve()
    })
  )

const connect = async () => {
  let attempts = 0
  let success = false
  let error = null
  while (attempts < MAX_ATTEMPTS && !success) {
    attempts += 1
    try {
      console.log(`Attempt #${attempts}: Connecting to ${url}/${dbName}`)
      await attemptConnect()
      success = true
    } catch (err) {
      error = err
    }
  }
  if (!success) {
    throw error
  }
  return success
}

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
