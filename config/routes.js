const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const paymentFlowService = require('../api/paymentFlow/paymentFlowService')
    paymentFlowService.register(router, '/paymentFlow')
}