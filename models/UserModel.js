const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    orders : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Order'
    }],
    ratings : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }]
});

module.exports = mongoose.model('User',UserSchema);