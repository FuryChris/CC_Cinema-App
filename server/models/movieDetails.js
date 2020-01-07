const mongoose = require('mongoose');
const Joi = require('joi');

const MovieDetails = new mongoose.model('MovieDetails', new mongoose.Schema({
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
    },
    overview: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    },
    movie_hall: {
        type: Number,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    timeId: {
        type: String,
        required: true  
    },
    time_movie: {
        type: String,
        required: true  
    }

}));

function validateMovieDetails(movieDetails) {
    const schema = {
        externalId: Joi.string().required(),
        title: Joi.string().min(3).required(),
        poster: Joi.poster().required(),
        overview: Joi.string().required(),
        runtime: Joi.number().required(),
        vote_average: Joi.number().precision(1).required(),
        movie_hall: Joi.number().required(),
        startDate: Joi.string().required(),
        timeId: Joi.string().required(),
        time_movie: Joi.string().required()
    };
    return Joi.validate(movieDetails, schema);
}

module.exports = { MovieDetails, validateMovieDetails };