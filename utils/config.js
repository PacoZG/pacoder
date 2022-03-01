require('dotenv').config()

const PORT = process.env.PORT || 3001
let MONGODB_URI = process.env.MONGODB_URI
const SITE_KEY = process.env.SITE_KEY

if (process.env.NODE_ENV === 'dev') {
  MONGODB_URI = process.env.MONGODB_URI_DEV
}

module.exports = { MONGODB_URI, PORT, SITE_KEY }
