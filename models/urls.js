const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type:String,
        required: true,
        unique: true
    },
    origalUrl:{
        type:String,
        required: true
    },
    visitHistory: [{
        timeStamp: {
            type: Number
        }
    }]
}, {timeStamps: true});

const URL = mongoose.model("shortURL", urlSchema);

module.exports = URL;