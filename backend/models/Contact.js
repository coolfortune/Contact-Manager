const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    userId: {
        type: String,
        required: true
    }}, 
    {
        collection : 'Contacts'
    }
);

module.exports = Contact = mongoose.model('contact', ContactSchema);