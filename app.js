const express = require('express')
const cors = require('cors')
require('express-async-errors')
// const mongoose = require('mongoose')
const app = express()
const path = require('path')

// const config = require('./utils/config')
// const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

// const url = config.MONGODB_URI
// console.log('Connected to ', { url })

// mongoose
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     if (process.env.NODE_ENV === 'dev') {
//       logger.info('Connected to MongoDB Dev_DB')
//     } else {
//       logger.info('Connected to MongoDB')
//     }
//   })
//   .catch(error => {
//     logger.error('error connecting to MongoDB: ', error.message)
// })

app.use(cors())
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(express.static('build'))
app.use(express.static(path.join(__dirname, 'build')))

app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

app.get('/health', (req, res) => {
  res.send('<body><div><h1>ok</h1><b></b></div></body>')
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
