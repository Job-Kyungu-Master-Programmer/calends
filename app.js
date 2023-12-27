
const express = require('express')
const app = express()
const Config = require('./Utils/Config')
const cors = require('cors')
const todoRouter = require('./Controllers/Todo')
const MiddleWare = require('./Utils/Middleware')
const Logger = require('./Utils/Logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(Config.MONGODB_URI)
.then(result => {
    Logger.info('Connected to MongoDB')
})
.catch(error => {
    Logger.error('Failed no connection')
})

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(MiddleWare.requestLogger)
app.use('/api/todos', todoRouter)
app.use(MiddleWare.unknow)

module.exports = app