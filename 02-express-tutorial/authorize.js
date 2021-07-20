const authorize = (req, res, next) => {
  const {user} = req.query;
  if (user === 'bruno') {
    req.user =  {name: 'bruno', id:22}
    next()
  } else {
    res.status(401).send('Unauthorized')
  }
  //console.log ('authorized')
  next()
}

module.exports = authorize