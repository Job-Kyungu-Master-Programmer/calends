//Backend
require('dotenv').config()
const express = require('express')
const app = express()
const Todo = require('./Models/Todo')
const cors = require('cors')


//MiddleWare 
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

//JSON data*
let todos = [
    {
        id: 1,
        title: 'dEVELOPPEMENT FRONTEND',
        important: true
    },
    {
        id: 2,
        title: 'dEVELOPPEMENT FRONTEND',
        important: false
    },
    {
        id: 3,
        title: 'dEVELOPPEMENT FRONTEND',
        important: false
    },
    {
        id: 4,
        title: 'dEVELOPPEMENT FRONTEND',
        important: false
    }
]

app.get('/', (request, response) => {
     response.send('<h1>Create Course</h1>')
})

app.get('/api/todos', (request, response) => {
    Todo.find({}).then(result => {
        response.json(result)
    })
})

app.get('/api/todos/:id', (request, response) => {
    Todo.findById(request.params.id)
    .then(result => {
        response.json(result)
    })
})

app.delete('/api/todos/:id', (request,response) => {
    Todo.findByIdAndDelete(request.params.id)
    .then(result => {
        response.json(result)
    })
})

app.put('/api/todos/:id', (request, response) => {
    const body = request.body

    const todUpdate = {
        title: body.title,
        important: body.important
    }
    Todo.findByIdAndUpdate(request.params.id, todUpdate, { new:true })
    .then(result => {
        response.json(result)
    })
})


app.post('/api/todos', (request, response) => {
    const body = request.body 
    const tod = new Todo({
        title: body.title,
        important: body.important || false,
    })
    tod.save().then(result => {
        response.json(result)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(` Server running on PORT ${PORT}`)
})