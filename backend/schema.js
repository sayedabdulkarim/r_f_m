const mongoose = require('mongoose')

const schema =  mongoose.Schema({
  wish: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  
})

const User = mongoose.model('never_quit', schema)

module.exports = User