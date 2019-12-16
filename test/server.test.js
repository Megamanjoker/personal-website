var express = require('express');
var router = express.Router();


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
should = chai.should();

describe('movies', () => {
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
    it('should post a movie');
    it('should get a single movie /:id');
    it('should delete a movie');
});