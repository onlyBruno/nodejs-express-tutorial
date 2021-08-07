const moongose = require('mongoose')

const UserSchema = new moongose.Schema({
  name: {
    type: String,
    require: [true, 'Please provide a name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, 'Please provide a valid email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: 6,
    maxlength: 14,
  },
})

module.exports = moongose.model('User', UserSchema)

