const logger = require('./Logger')


const requestLogger = (request, response, next) => {
     logger.info('Method : ', request.method)
     logger.info('Path : ', request.path)
     logger.info('Body : ', request.body)
     logger.info('===============')
     next()
}

const requestUnknow = (request, response) => {
    response.status(404).send('Page Not Found , Please clicking : ')
    redirect('/')
}

module.exports = {
    requestLogger,
    requestUnknow
}