const app = require('./app')
const db = require('./db/db')
const graphql = require('./graphql')
const { createServer } = require('http')

const port = 3000

module.exports = async () => {
  await db.connect()
  const server = createServer(app.callback())
  server.on('close', () => db.disconnect())
  graphql.installSubscriptionHandlers(server)
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })
}
