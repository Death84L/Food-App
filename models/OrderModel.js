const mongoose = require('mongoose');

//user,restaurant,delivey man, rating,status,item
const OrderSchema = new mongoose.Schema({
    user : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],
    restaurant : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Restaurant'
    }],
    ratings : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Rating'
    }],
    deliveryAgent : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'DeliveryAgent'
    }],
    status : String,
    items : [{
        name : String,
        price : Number,
        quantity : Number
    }]
});

module.exports = mongoose.model('Order',OrderSchema);