/**
 * Minimal uniform, stateless, cacheable REST API for testing purposes
 * DO NOT USE FOR PRODUCTION
 */

const things = 'books', // Other things? Change this to match your things, done...
  db = require('lowdb')('./data/'+things+'.json', { storage: require('lowdb/lib/file-async') })

// Initialize the lowdb database if your things don't exist
if(!db.has(things).value())
  db.defaults({[things]:[]}).value()

// Expose the following routes
module.exports = require('express').Router()

  // GET / send a list of all things
  .get('/', (req, res) => {
    res.json(
      db.get(things).value()
    )
  })

  // GET /:query send a list all things sastisfying req.params.query
  .get('/:query', (req, res) => {
    res.json(
      db.get(things).filter((value) => value.has(req.params.query))
    )
  })

  // PATCH / find things sastisfying req.body.find and patch them using req.body.patch (req.body needs to be JSON)
  .patch('/', (req, res) => {
    res.json(
      db.get(things).find(req.body.find).assign(req.body.patch).value()
    )
  })

  // POST / create a new thing using req.body (req.body needs to be JSON)
  .post('/', (req, res) => {
    res.json(
      db.get(things).push(req.body).value()
    )
  })

  // DELETE / remove things sastisfying req.body (req.body needs to be JSON)
  .delete('/', (req, res) => {
    res.json(
      db.get(things).remove(req.body).value()
    )
  })

/**
 * [has recursively searches an Objects strings for matching query]
 * @param  {String}  query [the string to search for]
 * @return {Boolean}       [defines whether there is a match]
 */
Object.prototype.has = function (query) {
  for(var key in this ) {
    switch(typeof this[key]){
      case 'string':
        if(this[key].toLowerCase().indexOf(query)!== -1)
          return true
        break
      case 'object':
        if(this[key].has(query))
          return true
        break
    }
  }
  return false
}
