const { messages } = require('./db')

module.exports = async ({ limit = 10, skip = 0, ...query }) => {
  const cursor = messages()
    .find(query)
    .skip(skip)
    .sort({ createdDatetime: -1, scheduledDatetime: -1 })

  const result = []
  let count = 0
  while ((await cursor.hasNext()) && count < limit) {
    count += 1
    result.push(await cursor.next())
  }
  const more = await cursor.hasNext()

  return {
    messages: result,
    more
  }
}
