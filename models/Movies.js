const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const movieSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    year: {
       type: Number,
       required: true 
    },
    actors: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Movies = mongoose.model('movies', movieSchema);