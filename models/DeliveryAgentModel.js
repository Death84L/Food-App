const mongoose  = require('mongoose');

const DeliverySchema = new mongoose.Schema({
    name : String,
    available : Boolean,
    orders : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Order'
    }]
})

module.exports = mongoose.model('Delivery',DeliverySchema);