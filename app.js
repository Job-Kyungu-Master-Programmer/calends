const express = require('express')
const app = express()
const config = require('./Utils/Config')
const cors = require('cors')
const pubRouter = require('./Controllers/Pub')
const logger = require('./Utils/Logger')
const middleware = require('./Utils/Middleware')
const userRouter = require('./Controllers/User')
const loginRouter = require('./Controllers/login')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

//connection 
mongoose.connect(config.MONGODB_URI)
.then(result => {
    logger.info('Connected to db')
})
.catch(error => {
    logger.error('failed connexion !')
})

//middleware
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(middleware.requestLogger)
app.use('/api/pubs', pubRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use(middleware.requestUnknow)
module.exports = app