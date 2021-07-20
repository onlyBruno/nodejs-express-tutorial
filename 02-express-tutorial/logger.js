const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time)
  // we should terminate the cicle here or name the next middleware
  next()
}

module.exports = logger