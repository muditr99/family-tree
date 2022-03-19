const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    phoneNumber: {
        type: String,
        required : true
    },
    relationship: {
        type: String,
        required : true
    },
    age:{
        type: Number,
        required : true
    },
    disease:[],
}, {
    timestamps : true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;