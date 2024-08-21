const Joi = require('joi')
const { DEVELOPMENT, TEST, PRODUCTION } = require('../constants/environments')

const schema = Joi.object({
  endpoint: Joi.string().optional(),
  key: Joi.string().optional(),
  managedIdentityClientId: Joi.string().optional(),
  filesDatabase: Joi.string().optional().default('ffc-sfd-customer-receiver-files'),
  filesContainer: Joi.string().optional().default('files-container')
})

const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
  managedIdentityClientId: process.env.AZURE_CLIENT_ID,
  filesDatabase: process.env.COSMOS_FILES_DATABASE,
  filesContainer: process.env.COSMOS_FILES_CONTAINER
}

const { error, value } = schema.validate(config, { abortEarly: false })

value.isDev = (process.env.NODE_ENV === DEVELOPMENT || process.env.NODE_ENV === TEST)
value.isTest = process.env.NODE_ENV === TEST
value.isProd = process.env.NODE_ENV === PRODUCTION

if (error) {
  throw new Error(`The CosmosDB config is invalid. ${error.message}`)
}

module.exports = value
