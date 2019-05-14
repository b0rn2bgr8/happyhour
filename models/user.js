const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    dateofbirth: { type: Date, default: '' },
    greetings: { type: String}
}, {
        timestamps: { createdAt: 'createdAt' }
    });

module.exports = mongoose.model('user', userSchema);
