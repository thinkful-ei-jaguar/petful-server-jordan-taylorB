const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue
  const results = People.get();
  res.json(results);
});

router.get('/user', (req, res) => {
  const result = People.getNewPerson();
  res.json(result);
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const {name} = req.body;

  People.enqueue(name);

  res.sendStatus(204);
});


router.get('/:name', (req, res) => {
  const {name} = req.params;
  console.log(name, 'name from req body');

  const person = name;
  const positionOfPerson = People.getPosition(name);

  const result = {
    name: person,
    position: positionOfPerson
  };

  res.json(result);
});

module.exports = router;

