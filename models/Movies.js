const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const movieSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    year: {
       type: Number,
       required: true 
    },
    actor: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Movies = mongoose.model('movies', movieSchema);