const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: [true, "Please enter your employee Id"],
        unique: true
    },
    firstname: {    
        type: String,
        required: [true, "Please enter your firstname"],
    },
    lastname: {
        type: String,
        required: [true, "Please enter your lastname"],
    },
    department: {
        type: String,
        required: [true, "Please enter your department"],
    },
    position: {
        type: String,
        required: [true, "Please enter your position"],
    }
});

module.exports = mongoose.model('Employee', employeeSchema);