const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
const bcrypt = require('bcryptjs')



const register = async (req, res) => {
const {name, email, password} = req.body

//  generate random byte, more rounds we have, more cpu usage we will have
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

const tempUser = {name,email,password:hashedPassword}


  const user = await User.create({ ...tempUser })
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('login user')
}

module.exports = {
  register,
  login,
}
//
