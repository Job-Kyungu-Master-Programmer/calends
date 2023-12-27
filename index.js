const Config = require('./Utils/Config')
const app = require('./app')
const Logger = require('./Utils/Logger')


const PORT = Config.PORT
app.listen(Config.PORT, () => {
    Logger.info(` Server running on PORT ${PORT}`)
})