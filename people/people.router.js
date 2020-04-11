/* eslint-disable strict */
const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all the people currently in the queue
  const results = People.get();
  res.json(results);
});

router.get("/user", (req, res) => {
  const result = People.getNewPerson();
  res.json(result);
});

router.post("/", json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body;
  console.log(person, "name from req body!!!!");
  const addedPerson = People.enqueue(person);
  console.log(addedPerson, "added person");

  res.json(addedPerson);
});

router.route("/:name").get(async (req, res, next) => {
  const { name } = req.params;
  console.log(name, "name from req body");

  const person = name;
  const positionOfPerson = await People.getPosition(name);
  console.log(
    positionOfPerson,
    "position of person response sending back to client"
  );
  const result = {
    name: person,
    position: positionOfPerson,
  };
  console.log(result, "result being sent back");
  res.json(result);
});

module.exports = router;
