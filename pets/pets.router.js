const express = require('express')
const bodyParser = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router
  .route('/cats')
  .get((req, res) => {
    const results = Pets.getCats()
    return res.json(results)
  })

router
  .route('/dogs')
  .get((req, res) => {
    const results = Pets.getDogs()
    return res.json(results)
  })

router
  .route('/cat')
  .get((req, res) => {
  // Return all cats currently up for adoption.
    const results = Pets.getFirstCat()
  
    if(results === null) {
      res.send('There are no cats available at this time')
    }

    return res.json(results[0])
  })

router
  .route('/dog')
  .get((req, res) => {
  // Return all dogs currently up for adoption.
    const results = Pets.getFirstDog()

    if(results === null) {
      res.send('There are no cats available at this time')
    }

    res.json(results[0])
  })

router.delete('/', bodyParser, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
