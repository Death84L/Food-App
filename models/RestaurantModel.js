const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name : String,
    menu : [{
        name : String,
        price : Number
    }],
    online : Boolean,
    ratings : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Rating'
    }]
});

module.exports = mongoose.model('Restaurant',RestaurantSchema)