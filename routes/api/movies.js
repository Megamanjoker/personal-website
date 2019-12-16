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
    const newPost = new Movies ({
        name: req.body.name,
        year: req.body.year,
        actor: req.body.actor
    });
    newPost.save()
        .then(movies => res.json(movies));
});

module.exports = router;