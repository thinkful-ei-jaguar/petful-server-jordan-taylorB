const express = require('express')
const bodyParser = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router
  .route('/cat')
  .get((req, res) => {
  // Return all cats currently up for adoption.
  const results = Pets.getCats()
  
  if(results === null) {
    res.send('There are no cats available at this time')
  }


  res.json(results[0])
})

router
  .route('/dog')
  .get((req, res) => {
  // Return all dogs currently up for adoption.
  const results = Pets.getDogs()

  if(results === null) {
    res.send('There are no cats available at this time')
  }

  res.json(results[0])
})

router.delete('/', bodyParser, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
