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

router
  .route('/cat/adopt')
  .get((req, res) => {
  // Remove a cat from adoption....but put them back at the end of the line
  // Also dequeue person in front who adopted them..and requeues

    const cat = Pets.dequeueCat()
    Pets.pets.cats.enqueue(cat)

    const person = People.dequeue()
    People.enqueue(person)

    const results = {
      adoptee: cat,
      human: person
    }

    res.json(results)
  })

  router
  .route('/dog/adopt')
  .get((req, res) => {
    // Remove a dog from adoption....but put them back at the end of the line
    //Also dequeque the person in front who adopted them, requeues

    const dog = Pets.dequeueDog()
    Pets.pets.dogs.enqueue(dog)

    const person = People.dequeue()
    People.enqueue(person)

    const response = {
      adoptee: dog,
      human: person
    }

    res.json(response)
  })

module.exports = router
