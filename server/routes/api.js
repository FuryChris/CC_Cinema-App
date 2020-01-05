const express = require('express');
const api = express.Router();
import { Movies, validateMovies } from "../models/movies";
import { MovieDetails, validateMovieDetails } from "../models/movieDetails";

api.get('/movies', async (req, res) => {
    try {
        const movies = await Movies.find({});
        res.status(200).send(movies);
    } catch (err) {
        res.status(400).send(err.message).json();
    }
});

api.get('/movie/:id', async (req, res) => {
    try {
        const movie = await MovieDetails.findById(req.params.id);
        movie ? res.status(200).send(movie) : res.status(404).send('Movie not found');
        
    } catch (err) {
        res.status(400).send(err.message).json();
    }
});


api.post('/movies', async (req, res) => {
    const {error} = validateMovies(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const movie = new Movie ({
        id: req.body.id,
        title: req.body.title,
        poster: req.body.poster
    });
    try {
    await movie.save();
    res.status(200).send(movie).json();
    }
    catch(err) {
        res.status(400).send(err.message).json();
    }
});

api.post('/movie', async (req, res) => {
    const {error} = validateMovieDetails(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const movieDetails = new MovieDetails ({
        id: req.body.id,
        title: req.body.title,
        poster: req.body.poster,
        overview: req.body.overview,
        runtime: req.body.runtime,
        vote_average: req.body.vote_average,
        movie_hall: req.body.movie_hall
    });
    try {
    await movieDetails.save();
    res.status(200).send(movieDetails).json();
    }
    catch(err) {
        res.status(400).send(err.message).json();
    }
});


module.exports = api;