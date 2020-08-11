const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    accountName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    }
}, {
    timestamps: true,
}
);

const accountUser = mongoose.model('accountUser', accountSchema);
module.exports = accountUser;