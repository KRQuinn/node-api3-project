function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`
    Method: ${req.method} 
    URL: ${req.url} 
    Time: ${new Date().toISOString()}
  `)
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};