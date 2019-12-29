const mongoose = require('mongoose');
const Joi = require('joi');

const Hall = new mongoose.model('Hall', new mongoose.Schema({
    is_occupied: {
        type: Boolean,
        required: true
    },
    number_of_tickets: {
        type: Number,
        required: true
    },
    row: {
        type: String,
        required: true
    },
    seating: {
        type: Number,
        required: true
    }
}));

function validateHall(hall) {
    const schema = {
        movie_title: Joi.boolean().required(),
        number_of_tickets: Joi.number().required(),
        row: Joi.string().require(),
        seating: Joi.number().require()
    };
    return Joi.validate(hall, schema);
}

exports.Hall = Hall;
exports.validate = validateHall;
