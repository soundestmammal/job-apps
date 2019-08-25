const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    }
})

const User = new mongoose.model('User', userSchema);

module.exports = User;