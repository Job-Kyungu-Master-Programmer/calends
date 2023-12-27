const mongoose = require('mongoose')

if(process.argv.length <3) {
    console.log('Password please')
    process.exit(1)
}
const password = process.argv[2]

const url = 
`mongodb+srv://joblodo97:repere@cluster0.npfuaiz.mongodb.net/?retryWrites=true&w=majority`


mongoose.set('strictQuery', false)
mongoose.connect(url)

const todSchema = new mongoose.Schema({
    title: String,
    important: Boolean
})

const Todo = new mongoose.model('Todo', todSchema)

const tods = new Todo({
    title: "La grenouillle morte",
    important : false
})

tods.save().then(result => {
    console.log('Send Successfully')
    mongoose.connection.close()
})