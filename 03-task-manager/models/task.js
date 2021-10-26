const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be provided'],
        trim: true,
        maxlength: 25,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Task', Task);