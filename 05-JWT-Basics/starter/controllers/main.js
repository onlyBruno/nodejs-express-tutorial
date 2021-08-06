//  Checking if user/pass in the login(post) requerst
//  if so, create a new JWT
//  respond to front-end
//  setup auth so only requests with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const login = async (req, res) => {
  const { username, password } = req.body
  //  Validation will happen mongoose
  //  JOI
  //  check in the controller

  if (!username || !password) {
    throw new BadRequest('Please provide email/username and password')
  }
  //  Using date just for testing, the id should be provided by DB
  const id = new Date().getDate()

  //  id is the common value passed back in the payload, helps to identify the user.
  //  Always keep the payload small, better user experience
  //  Secret token use a complex, long and unguessable value
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  res.status(200).json({ message: 'user created', token })
}

//  capture assing to a variable and check if is exists otherwise throw an error
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Welcome, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  })
}

module.exports = {
  login,
  dashboard,
}
