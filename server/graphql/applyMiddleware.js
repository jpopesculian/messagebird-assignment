const graphql = require('.')

module.exports = app => {
  graphql.applyMiddleware({ app })
  app.ws.use(({ websocket }) => grapqhl.installSubscriptionHandlers(websocket))
}
