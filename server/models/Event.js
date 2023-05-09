const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
    performer:
        {
        type: String,
        required: true,
        trim: true
        },
    instrument:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    date: {
        type: String, 
        min: Date.now
    },
    eventPhoto: {
        type: Buffer, 
        contentType: String
    }
})

const Event = model('Event', eventSchema);

module.exports = Event;

