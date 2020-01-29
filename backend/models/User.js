const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }},
    { collection: 
        'Users'
});

module.exports = User = mongoose.model('user', UserSchema);