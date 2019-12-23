const mongoose = require('mongoose');
const Joi = require('joi');
require('mongoose-type-url');

const Select_movie = new mongoose.model('Select_movie', new mongoose.Schema({
    movie_title: {
        type: String,
        required: true
    },
    movie_poster: {
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
    name_contry: {
        type: String,
        required: true
    },
    movie_hall: {
        type: Number,
        required: true
    },

}));

function validateMovie(select_movie) {
    const schema = {
        movie_title: Joi.string().min(3).required(),
        movie_poster: Joi.work(mongoose.SchemaTypes.Url).profile(mongoose.SchemaTypes.Url).required(),
        overview: Joi.string().required(),
        runtime: Joi.number().required(),
        vote_average: Joi.number().precision(1).required(),
        name_contry: Joi.string().min(3).required(),
        movie_hall: Joi.number().required()
    };
    return Joi.validate(select_movie, schema);
}

exports.Select_movie = Select_movie;
exports.validate = validateMovie;
