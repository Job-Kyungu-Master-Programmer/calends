const config = require('./Utils/Config')
const app = require('./app')
const logger = require('./Utils/Logger')


const PORT = process.env.PORT || config.PORT
app.listen(PORT, () => {
   logger.info(`Server running on PORT ${PORT}`)
})