const cosmosClient = require('./client')
const { cosmosConfig } = require('../config')

const filesDatabase = async () => {
  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: cosmosConfig.filesDatabase
    })

    await database.containers.createIfNotExists({
      id: cosmosConfig.filesContainer
    })

    console.log(`A CosmosDB database has been created: ${database.id}.`)

    return database
  } catch (error) {
    console.error('Error creating Cosmos instance:', error)
  }
}

module.exports = { filesDatabase }
