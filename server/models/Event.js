const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
    performer: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
    instrument: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
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
        type: Date, 
        min: Date.now
    },
    eventPhoto: {
        type: Buffer, 
        contentType: String
    }
})

const Event = model('Event', eventSchema);

module.exports = Event;

