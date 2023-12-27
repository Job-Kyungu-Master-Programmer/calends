const todoRouter = require('express').Router()
const Todo = require('../Models/Todo')


todoRouter.get('/', (request, response) => {
   Todo.find({}).then(result => {
       response.json(result)
   })
})

todoRouter.get('/:id', (request, response) => {
   Todo.findById(request.params.id)
   .then(result => {
       response.json(result)
   })
})

todoRouter.delete('/:id', (request,response) => {
   Todo.findByIdAndDelete(request.params.id)
   .then(result => {
       response.json(result)
   })
})

todoRouter.put('/:id', (request, response) => {
   const body = request.body

   const todUpdate = {
       title: body.title,
       important: body.important
   }
   Todo.findByIdAndUpdate(request.params.id, todUpdate, { new:true })
   .then(result => {
       response.json(result)
   })
})


todoRouter.post('/', (request, response) => {
   const body = request.body 
   const tod = new Todo({
       title: body.title,
       important: body.important || false,
   })
   tod.save().then(result => {
       response.json(result)
   })
})

module.exports = todoRouter
