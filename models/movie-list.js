const mongoose = require('mongoose');
require('mongoose-type-url');


const Movie_list = new mongoose.model('Movie_list', new mongoose.Schema({
    movie_title: {
        type: String,
        required: true
    },
    movie_poster_url: {
        work: mongoose.SchemaTypes.Url,
        profile: mongoose.SchemaTypes.Url,
        required: true
    }
}));

function validateMovieList(movie_list) {
    const schema = {
        movie_title: Joi.string().min(3).required(),
        movie_poster: Joi.work(mongoose.SchemaTypes.Url).profile(mongoose.SchemaTypes.Url).required(),
    };
    return Joi.validate(movie_list, schema);
}

exports.Movie_list = Movie_list;
exports.validate = validateMovieList;


