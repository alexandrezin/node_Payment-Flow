const PaymentFlow = require('./paymentFlow')

PaymentFlow.methods(['get', 'post', 'put', 'delete'])
PaymentFlow.updateOptions({new: true, runValidatros: true})

PaymentFlow.route('count', function(req, res, next){
    PaymentFlow.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]})
        }
        else{
            res.json({value})
        }
    })
})

module.exports = PaymentFlow