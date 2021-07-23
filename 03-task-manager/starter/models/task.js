const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide task name'],
    trim: true,
    maxlength: [30, 'name cannot be longer than 30 characters']
  },
  status: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task',TaskSchema)