var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const db = require('../config/keys').testMongoURI;
mongoose.connect(db);
const Movies = require('../models/Movies');


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
should = chai.should();

describe('movies', () => {
    Movies.collection.drop();

  beforeEach((done) => {
    var newMovie = new Movies({
        "name": "Exam",
        "year": "2019",
        "actors": "alexander"
    });
    newMovie.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    Movies.collection.drop();
    done();
  });
    it('should get all movies', (done) => {
        chai.request('http://localhost:5000')
        .get('/api/movies')
        .end((err,res) => {
            //console.log(res.body);
            res.should.have.status(200);
            res.should.be.json; 
            res.body.should.be.a('array');
            done();
        });
    });
    it('should post a movie', (done) => {
        chai.request('http://localhost:5000')
        .post('/api/movies')
        .send({"name": "slum dog millionaire", "year": "2019", "actors": "Jelani"})
        .end((err, res) => {
            //console.log(res.body);
            res.should.have.status(200);
            res.should.be.json;
            done();
        });

    });
    it('should get a single movie /:id');
    it('should delete a movie');
});