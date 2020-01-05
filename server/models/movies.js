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
        id: Joi.string().required(),
        title: Joi.string().min(3).required(),
        poster: Joi.work(mongoose.SchemaTypes.Url).profile(mongoose.SchemaTypes.Url).required()
    };
    return Joi.validate(movies, schema);
}

module.exports =  {Movies, validateMovies};
