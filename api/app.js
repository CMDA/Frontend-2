/**
 * Minimal uniform, stateless, cacheable REST API for testing purposes
 * DO NOT USE FOR PRODUCTION
 */

const express = require('express')
  prettyLogging = require('morgan')('dev'),
  jsonBodyParser = require('body-parser').json(),
  books = require('./routes/books')

module.exports = express()
  .use(prettyLogging)
  .use(jsonBodyParser)

  // hook routes to express
  .use('/books', books)

  // catch 404 and forward to error handler
  .use((req, res, next) => {
    next(new Error('Not Found').status = 404);
  })

  // error handler
  .use((err, req, res, next) => {
    res.status(err.status || 500)
      .send({message: err.message, error: err})
  })
