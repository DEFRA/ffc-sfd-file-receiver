const { filesDatabase } = require('./database')
const cosmosInstance = async () => {
  try {
    const cosmos = {}
    cosmos.filesDatabase = await filesDatabase()
    return cosmos
  } catch (error) {
    console.error('Error creating Cosmos instance:', error)
  }
}

module.exports = cosmosInstance
