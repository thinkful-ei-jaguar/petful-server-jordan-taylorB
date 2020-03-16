const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue
  const results = People.get();
  res.json(results);
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const {name} = req.body;
  const personResponse = People.enqueue(name);
  res.json(personResponse);
});

router.get('/position', (req, res) => {
  console.log(req.body, 'req body at poisiton endpoint');
  // const positionOfPerson = People.getPosition(name);
  // console.log(positionOfPerson, 'position of person');
  // res.json(positionOfPerson);
});

module.exports = router;
