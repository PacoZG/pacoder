const express = require('express')
const cors = require('cors')
require('express-async-errors')
const app = express()
const path = require('path')

const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.static('build'))
app.use(express.static(path.join(__dirname, 'build')))

app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
