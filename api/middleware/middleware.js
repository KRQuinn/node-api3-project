const Users = require('../users/users-model');

function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    prodMessage: 'something went really wrong!',
  })
  next()
}

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`
    Method: ${req.method} 
    URL: ${req.url} 
    Time: ${new Date().toISOString()}
  `)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const { id } = req.params
  Users.getById(id)
    .then(validatingUser => {
      if (validatingUser) {
        req.user = validatingUser
        next()
      } else {
        next({ status: 404, message: 'not found' })
      }
    })
    .catch(next)
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body
  if (!name) {
    res.status(400).json({
      message: 'missing required name field',
    })
  } else {
    next()
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const { text } = req.body
  if (!req.body.text) {
    res.status(400).json({
      message: 'missing required text field',
    })
  } else {
    req.text = text.trim()
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  handleError,
  logger,
  validateUserId,
  validateUser,
  validatePost
};