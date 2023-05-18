const route = require('express').Router()
const mailController = require('../controller/mailController')

route.post(`/send/mail`, mailController.sendMail)

module.exports = route