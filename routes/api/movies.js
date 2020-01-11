const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const Movies = require('../../models/Movies');

router.get('/', (req, res) => {
    Movies.find()
        .sort({date: -1 })
        .then(movies => res.json(movies));
});

router.post('/', (req, res) => {
    const newMovie = new Movies ({
        title: req.body.title,
        year: req.body.year,
        actor: req.body.actor
    });
    newMovie.save()
        .then(movies => res.json(movies));
});

router.delete('/:id', (req, res) => {
    Movies.findById(req.params.id)
    .then(movie => movie.remove().then(() => res.json({success: true })))
    .catch(err => res.status(404).json({sucess: false}));
});

module.exports = router;