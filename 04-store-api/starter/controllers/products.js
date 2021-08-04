const getAllProductStatic = async (req, res) => {
  //  Once you using the 'express-async-errors' lib you do not need to declare your own trycatch but still having the benefits of ansync
  throw new Error('testing async errors')
  res.status(200).json({msg: 'Products testing routes'})
}

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg:'Product route'})
}

module.exports = { 
  getAllProducts,
  getAllProductStatic
}