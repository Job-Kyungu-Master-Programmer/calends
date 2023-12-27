const Logger = require('./Logger')

const requestLogger = (request, response,next) => {
    Logger.info('Method', request.method)
    Logger.info('Path', request.path)
    Logger.info('Body : ', request.body)
    Logger.info('----')
    next()
}

const unknow = (request, response) => {
    response.status(404).send('404 PAGE NOT FOUND')
}

module.exports = {
    requestLogger,
    unknow
}