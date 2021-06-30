const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    firstName : {
        type: 'string',
        required: true,
    },
    lastName : {
        type: 'string'
    },
    email : {
        type: 'string',
        required: true,
        unique: true
    },
    password : {
        type: 'string',
        required: true,
        minLength:6
    },
    role : {
        type: 'string',
        required: true
    }
});

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);

