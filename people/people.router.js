const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  
  const results = People.get()

  res.json(results)
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.

  const {name} = req.body

  People.enqueue(name)

  res.sendStatus(204)
})

module.exports = router
