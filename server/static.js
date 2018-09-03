const path = require('path')
const fs = require('fs')
const send = require('koa-send')

const root = path.join(appRoot, 'public')

const exists = file =>
  new Promise((resolve, reject) =>
    fs.stat(path.join(root, file), (err, stats) => {
      if (err || !stats.isFile()) {
        return resolve(false)
      }
      return resolve(true)
    })
  )

module.exports = async ctx => {
  if (await exists(ctx.path)) {
    return await send(ctx, ctx.path, { root })
  }
  await send(ctx, 'index.html', { root })
}
