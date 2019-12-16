const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('movies', () => {
    it('should get all movies', (done) => {
        chai.request('http://localhost:5000')
        .get('/api/movies')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a(json); 
            done();
        });
    });
    it('should post a movie');
    it('should get a single movie /:id');
    it('should delete a movie');
});