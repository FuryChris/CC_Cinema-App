const mongoose = require('mongoose');

const Movies = new mongoose.model('Movie', new mongoose.Schema({
    externalId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
}));

function validateMovies(movies) {
    const schema = {
        externalId: Joi.number().required(),
        title: Joi.string().min(3).required(),
        poster: Joi.string().required()
    };
    return Joi.validate(movies, schema);
}

module.exports = {Movies, validateMovies};
