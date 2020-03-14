const Queue = require('../queue/Queue')
const store = require('../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    const peopleList = people.all()
    return peopleList
  },

  enqueue(person) {
    // Add a person to the queue.
    const newPerson = people.enqueue(person)
    return newPerson
  },

  dequeue() {
    const adopter = people.dequeue()
    return adopter
  }
}
