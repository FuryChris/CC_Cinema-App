const Joi = require('joi');
const mongoose = require('mongoose');

const User = new mongoose.model('User', new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_number: {
        type: Number,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // poprawnosc adresu e-mail
    }
}));

function validateUser(user) {
    const schema = {
        user_name: Joi.string().min(3).required(),
        user_number: Joi.number()
            .min(9)
            .required(),
        user_email: Joi.string().min(5).required().email()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
