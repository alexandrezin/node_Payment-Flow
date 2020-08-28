const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb+srv://admin:M5nK996VJxVBr5pC@paymentflow.mxrmw.gcp.mongodb.net/PaymentFlow?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})