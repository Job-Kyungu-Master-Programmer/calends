//Backend
const express = require('express')
const app = express()

//JSON data*
let todos = [
    {
        id: 1,
        title: 'dEVELOPPEMENT FRONTEND',
        important: true
    }
]

app.get('/', (request, response) => {
     response.send('<h1>Create Course</h1>')
})


const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(` Server running on PORT ${PORT}`)
})