const mongoose = require('mongoose');
const { isEmail } = require('validator')


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Please Enter an Email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, 'Please Enter a password'],
        minLength: [6, "Minimum password length is 6 characters"]
    }
})

module.exports = mongoose.model("User", userSchema)