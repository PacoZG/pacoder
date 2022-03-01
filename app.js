const express = require('express')
const cors = require('cors')
require('express-async-errors')
const app = express()
const path = require('path')

const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(express.static('build'))
app.use(express.static(path.join(__dirname, 'build')))

app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/api/variables', (request, response) => {
  const { SITE_KEY } = require('./utils/config')
  response.status(201).json(SITE_KEY)
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
