const mongoose = require('mongoose');
const router = require('../routes');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    googleId: {
        type: String,
        requires: true
    },
    displayName: {
        type: String,
        requires: true
    },
    FirstName: {
        type: String,
        requires: true
    },
    lastName: {
        type: String,
        requires: true
    },
    profileImage: {
        type: String,
        requires: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);