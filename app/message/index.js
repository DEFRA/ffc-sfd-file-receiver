const util = require('util')
const { messageConfig } = require('../config')
const { MessageReceiver } = require('ffc-messaging')

const handleMessage = async (message, receiver) => {
  try {
    console.log('Received message:', message.body)
    await receiver.completeMessage(message)
  } catch (err) {
    console.error('Message error', util.inspect(err.message, false, null, true))
  }
}

const startMessaging = async () => {
  let filesReceiver //eslint-disable-line
  const receiverAction = (message) => handleMessage(message, filesReceiver)
  filesReceiver = new MessageReceiver(
    messageConfig.receiverSubscription,
    receiverAction
  )
  await filesReceiver.subscribe()
  console.info('File processor is ready to receive metadata')
}

module.exports = { startMessaging }
