const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    //  set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something wentg wrong, please try again later'
  }
  if(err.code && err.code === 11000){
    customError.msg = `This ${Object.keys(err.keyValue)} address is already being used`
    customError.statusCode = 400
  }
  if(err.name === 'CastError'){
    customError.msg = `No item found with id: ${err.value}`
    customError.statusCode = 404
  }
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
