require('dotenv').config()

const PORT = process.env.PORT || 3001
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'dev') {
  MONGODB_URI = process.env.MONGODB_URI_DEV
}

module.exports = { MONGODB_URI, PORT }
