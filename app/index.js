const server = require('./server')
const { startMessaging } = require('./message')

const init = async () => {
  await server.start()
  console.log('Server running on %s', server.info.uri)
  await startMessaging()
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
