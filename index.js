const path = require('path')
global.appRoot = path.resolve(__dirname)

require('./server/serve')()
