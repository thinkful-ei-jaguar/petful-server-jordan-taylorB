const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: CLIENT_ORIGIN
}))

app.use('/api/people', require('../people/people.router'))
app.use('/api/pets', require('../pets/pets.router'))

app.use('/', (req, res) => {
    let response;
    if (NODE_ENV === 'production') {
        response = {error: {messge: 'server error'}}
    }
    else {
        respone = {messge: error.message, error}
    }
    res.status(500).json(response)
})

module.exports = app
