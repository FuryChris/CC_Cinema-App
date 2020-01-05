const mongoose = require('mongoose');
const Joi = require('joi');
require('mongoose-type-url');

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
        work: mongoose.SchemaTypes.Url,
        profile: mongoose.SchemaTypes.Url,
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

}));

function validateMovieDetails(movieDetails) {
    const schema = {
        id: Joi.string().required(),
        title: Joi.string().min(3).required(),
        poster: Joi.work(mongoose.SchemaTypes.Url).profile(mongoose.SchemaTypes.Url).required(),
        overview: Joi.string().required(),
        runtime: Joi.number().required(),
        vote_average: Joi.number().precision(1).required(),
        movie_hall: Joi.number().required()
    };
    return Joi.validate(movieDetails, schema);
}

exports.Select_movie = MovieDetails;
exports.validate = validateMovieDetails;
