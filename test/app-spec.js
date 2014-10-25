/*jshint -W030 */

var request = require('supertest');
var expect = require('chai').expect;
var app = require('../app');

describe("App Routes", function () {

    it("loads bingo card", function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });

    it("loads card images as json", function (done) {
        request(app)
            .get('/card-images')
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.be.instanceof(Array);
                done();
            });
    });

    it("any domain can access this content", function (done) {
        request(app)
            .get('/card-images')
            .expect(200)
            .end(function (err, res) {
                expect( res.headers['access-control-allow-origin'] ).to.equal('*');
                done();
            });
    });

});