var request = require('supertest');
var app = require('../app');

describe("App Routes", function () {

    it("loads bingo card", function (done) {
        request(app).get('/').expect(200).end(done);
    });

    it("loads card images as json");

    it("enables cors");

});