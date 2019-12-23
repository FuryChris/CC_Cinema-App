const mongoose = require('mongoose');
const Joi = require('joi');

const Select_movie = new mongoose.model('Select_movie', new mongoose.Schema({
    movie_title: {
        type: String,
        required: true
    },
    movie_length: {
        type: Number,
        required: true
    },
    movie_genre: {
        type: String,
        required: true
    },
    movie_description: {
        type: String,
        required: true
    },
    movie_actors: {
        type: String,
        required: true
    },
    movie_contry: {
        type: String,
        required: true
    },
    movie_poster: {
        data: Buffer,
        contentType: String,
        required: true
    }
}));

function validateMovie(select_movie) {
    const schema = {
        movie_title: Joi.string().min(3).required(),
        movie_length: Joi.number().min(2).required(),
        movie_genre: Joi.string().min(3).required(),
        movie_description: Joi.string().min(3).required(),
        movie_actors: Joi.string().min(3).required(),
        movie_contry: Joi.string().min(3).required(),
        movie_poster: Joi.data(Buffer).contentType(String).min(3).required()
    };

    return Joi.validate(select_movie, schema);
}

exports.Select_movie = Select_movie;
exports.validate = validateMovie;
