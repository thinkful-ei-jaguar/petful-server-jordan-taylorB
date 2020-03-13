const Queue = require('../queue/Queue')
const store = require('../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  getCats() {
    const cats = pets.cats.all()
    return cats
  },
  getDogs() {
    const dogs = pets.dogs.all()
    return dogs
  },
  getFirstCat() {
    // Return the pets next in line to be adopted.
    const currentCats = pets.cats.show()
    
    if(!currentCats[0]) {
      return null
    }
    return currentCats
  },

  getFirstDog() {
    const currentDogs = pets.dogs.show()
    if(!currentDogs[0]) {
      return null
    }
    return currentDogs
  },

  dequeue(type) {
    // Remove a pet from the queue.
  }
}
