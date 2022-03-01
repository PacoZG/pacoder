const variablesRouter = require('express').Router()
const Variable = require('../models/variables')

variablesRouter.get('/', async (request, response) => {
  const variables = await Variable.find({})
  response.status(201).json(variables.map(variable => variable.toJSON()))
})

variablesRouter.get('/site_key', async (request, response) => {
  const site_key = await Variable.findOne({ name: 'SITE_KEY' })
  response.status(201).json(site_key.toJSON())
})

variablesRouter.post('/', async (request, response) => {
  const { body } = request
  const variable = new Variable({
    name: body.name,
    value: body.value,
  })

  console.log({ body })
  const savedVariable = await variable.save()
  response.status(201).json(savedVariable.toJSON())
})

module.exports = variablesRouter
