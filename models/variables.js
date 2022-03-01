const mongoose = require('mongoose')

const variableSchema = new mongoose.Schema({
  name: String,
  value: String,
})

variableSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Variable', variableSchema)
