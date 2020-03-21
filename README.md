# Petful Server

# Team
- Jordan Castillo
- Taylor Bradshaw

# Link to Client: 
- https://github.com/thinkful-ei-jaguar/Petful-Client-TaylorB-Jordan/tree/master

----

# Endpoints
## `/api/people`

#### `/` GET
Response: Array of people
  Ex: `people: [
    'Person 1',
    'Person2',
    'Person 3'
  ]`

#### `/` POST 
Request: newPerson object
  Ex: newPerson: {
    name: 'Person name'
  }

#### `/:name` GET
Response: Object containing the person name and position in line 
  Ex: {
    name: person, 
    position: positionOfPerson
  }

----

## `/api/pets`

#### `/cats` or `/dogs` GET
Response: Array of all cats or dogs objects
  Ex: dogs: [
    ...
    {
      age: 1,
      breed: 'Border Collie',
      description: 'A smiling black and white border collie that plays frisbee    all day long.',
      gender: 'Female',
      imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Kaiya',
      story: 'Abandonded as puppy'
    },
    ...
  ]

#### `/cat` or `/dog` GET
Response: Object of the first cat or dog in line
  Ex:  
    {
      age: 2,
      breed: 'Bengal',
      description: 'Orange bengal cat with black stripes lounging on concrete.',
      gender: 'Female',
      imageURL:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      name: 'Steve French',
      story: 'Thrown on the street'
    },

#### `/cat/adopt` or `/dog/adopt` GET 
Response: Object containing the cat or dog adopted and the human name who adopted them 
  Ex: {
    adoptee: cat,
    human: person
  }
  - This endpoint dequeues the cat or dog 
  - This endpoint dequeues the human that just clicked 'Adopt'

----

# Tech Stack 
- Node.js
- Express
