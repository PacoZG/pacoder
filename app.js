require('express-async-errors')
const express = require('express')
const cors = require('cors')
const app = express()

const middleware = require('./utils/middleware')

app.use(cors())

app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
