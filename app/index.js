require('./insights').setup()
require('log-timestamp')
const { startMessaging } = require('./message')

const init = async () => {
  await startMessaging()
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
