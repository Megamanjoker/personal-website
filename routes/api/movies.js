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
        name: req.body.name,
        year: req.body.year,
        actor: req.body.actor
    });
    newMovie.save()
        .then(movies => res.json(movies));
});

module.exports = router;