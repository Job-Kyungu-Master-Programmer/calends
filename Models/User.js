const mongoose = require('mongoose')
const validator  = require('mongoose-unique-validator')
// mongoose.set('strictQuery', false)

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    age: Number,
    number: String,
    mail: String,   
    passwordHash: String,
    pubs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pub'
        }
    ]
})

userSchema.plugin(validator)

userSchema.set('toJSON', {
    transform: (document, returned) => {
         returned.id = returned._id
         delete returned._id
         delete returned.__v
         delete returned.passwordHash
    }
})

module.exports = new mongoose.model('User', userSchema)