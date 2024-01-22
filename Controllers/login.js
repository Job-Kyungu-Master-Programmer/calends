const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()
const User = require('../Models/User')

loginRouter.post('/', async (request, response) => {
    const { name, password } = request.body
    const user = await User.findOne({ name })
    
    const passwordCorrect = user === null ? false
                                          : await bcrypt.compare(password, user.passwordHash)
    if(!(user && passwordCorrect)) {
         return response.status(401).json({
            error: 'Invalid password !'
         })
    }

    const infoToken = {
        name: user.name,
        id: user._id
    }

    const token = jwt.sign(infoToken, process.env.SECRET_JWT)
    response.status(200).send({token,
       name: user.name, username: user.username,
       number: user.number, age: user.age,
       mail: user.mail
    })
})


module.exports = loginRouter