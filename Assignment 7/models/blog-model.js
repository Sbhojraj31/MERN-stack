const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    heading: {
        type: 'string',
        required: true,
        maxLength: 60
    },
    blog: {
        type: 'string',
        required: true,
        maxLength: 10000
    },
    userID : {
        type: 'string',
        required: true,
        unique: true
    },
});

blogSchema.plugin(uniqueValidator);

module.exports = mongoose.model('BlogPost',blogSchema)