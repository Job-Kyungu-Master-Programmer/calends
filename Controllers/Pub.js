const pubRouter = require('express').Router()
const Pub = require('../Models/Pub')
const User = require('../Models/User')


//routes 
pubRouter.get('/', async (request, response) => {
    const result = await Pub.find({}).populate('users')
    response.json(result)
})

// :id 
pubRouter.get('/:id', async (request, response) => {
    const result = await Pub.findById(request.params.id)
    response.json(result);
});



pubRouter.post('/', async (request, response) => {
    const body = request.body
    const user = await User.findById(body.userId)

    const sendPub = new Pub({
        title: body.title,
        phone: body.phone,
        content: body.content,
        like: body.like,
        hours: body.hours,
        minutes: body.minutes,
        years: body.years,
        months: body.months,
        days: body.days,
        id: user.id
    })

    const savedPub = await sendPub.save()
    user.pubs = user.pubs.concat(savedPub)
    await user.save()
    response.status(201).json(savedPub._id)
})

//update Like :id
pubRouter.put('/:id', async (request, response) => {
    const body = request.body

    const updatePub = {
        title: body.title,
        phone: body.phone,
        content: body.content,
        like: body.like,
        hours: body.hours,
        minutes: body.minutes,
        years: body.years,
        months: body.months,
        days: body.days
    }

    const updateInfo = 
    await Pub.findByIdAndUpdate(request.params.id, updatePub, { new : updatePub.like })
    response.json(updateInfo)
})

//delete
pubRouter.delete('/:id', async (request, response) => {
    const result = await Pub.findByIdAndDelete(request.params.id)
    response.json(result)
})

module.exports = pubRouter