const mongoose  = require('mongoose');

const RatingSchema = new mongoose.Schema({
    order : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Order'
    }],
    comment : String,
    rating : Number
});

module.exports = mongoose.model('Rating',RatingSchema)