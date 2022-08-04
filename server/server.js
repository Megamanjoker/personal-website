const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

const movies = require('./routes/api/movies');

const app = express();

app.use(bodyParser.json());

//database configuration
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err));

app.use('/api/movies', movies);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started on port 5000'));