const mongoose = require('mongoose')
// mongoose.set('strictQuery', false)

const pubSchema = new mongoose.Schema({
    title: String,
    phone: String,
    content: String,
    like: Number,
    hours: Number,
    minutes: Number,
    years: Number,
    months: Number,
    days: Number,
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
})

// pubschema set 
pubSchema.set('toJSON', {
    transform: (document, returned) => {
        returned.id = returned._id.toString()
        delete returned._id
        delete returned.__v
    }
})

module.exports = new mongoose.model('Pub', pubSchema)
