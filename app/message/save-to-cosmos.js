const cosmosInstance = require('../cosmos')
const { cosmosConfig } = require('../config')

const saveToCosmos = async (message) => {
  try {
    const { filesDatabase } = await cosmosInstance()
    console.log('************************', cosmosConfig.filesContainer)
    await filesDatabase
      .container(cosmosConfig.filesContainer)
      .items.create(message.body)

    console.log('Message saved to CosmosDB:', message.body)
  } catch (error) {
    console.error('Error saving message to Cosmos:', error)
  }
}

module.exports = { saveToCosmos }
