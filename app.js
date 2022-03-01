const express = require('express')
const cors = require('cors')
require('express-async-errors')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const variablesRouter = require('./controllers/variables')

const url = config.MONGODB_URI

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    if (process.env.NODE_ENV === 'dev') {
      logger.info('Connected to MongoDB Dev_DB')
    } else {
      logger.info('Connected to MongoDB')
    }
  })
  .catch(error => {
    logger.error('error connecting to MongoDB: ', error.message)
  })

app.use(cors())
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(express.static('build'))
app.use(express.static(path.join(__dirname, 'build')))

app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

app.use('/api/variables', variablesRouter)

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
