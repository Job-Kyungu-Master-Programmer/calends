const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.connect(url).then(result => {
    console.log('Connected to MongoDB')
})
.catch(error => {
    console.log('Failed connection')
})

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