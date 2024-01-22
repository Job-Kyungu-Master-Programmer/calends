const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../Models/User')



// routes 
userRouter.get('/', async (request, response) => {
     const result = await User.find({}).populate('pubs')
     response.json(result)
})

userRouter.post('/', async (request, response) => {
    const { name, username, mail, age, number,  password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const sendUser = new User({
        name,
        username,
        mail,
        age,
        number,
        passwordHash
    })
    const savedUser = await sendUser.save()
    response.status(200).json(savedUser)
})

module.exports = userRouter
