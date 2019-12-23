const mongoose = require('mongoose');
const Joi = require('joi');

const Movie_list = new mongoose.model('Movie_list', new mongoose.Schema({
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

function validateMovieList(movie_list) {
    const schema = {
        movie_title: Joi.string().min(3).required(),
        movie_length: Joi.number().min(2).required(),
        movie_genre: Joi.string().min(3).required(),
        movie_contry: Joi.string().min(3).required(),
        movie_poster: Joi.data(Buffer).contentType(String).min(3).required()
    };

    return Joi.validate(movie_list, schema);
}

exports.Movie_list = Movie_list;
exports.validate = validateMovieList;
