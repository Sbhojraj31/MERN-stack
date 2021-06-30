const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        minLength: 6
    },
    dob: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        required: true
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);