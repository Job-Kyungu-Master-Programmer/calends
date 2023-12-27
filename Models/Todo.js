const mongoose = require('mongoose')

const todSchema = new mongoose.Schema({
    title: String,
    important: Boolean
})

todSchema.set('toJSON', {
    transform: (document, returned) => {
        returned.id = returned._id.toString()
        delete returned._id
        delete returned.__v
    }
})

module.exports = mongoose.model('Todo', todSchema)