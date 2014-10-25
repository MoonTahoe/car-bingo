var expect = require('chai').expect;
var model = require('../models/img');

describe("Image Model", function () {

    var imgs;

    beforeEach(function (done) {
        model('test/assets/imgs', function (results) {
            imgs = results;
            done();
        });
    });

    afterEach(function () {
        imgs = null;
    });

    it("should return an array", function () {
        expect(imgs).to.be.instanceof(Array);
    });

    it("array should contain all strings", function () {
        var results = imgs.every(function (img) {
            return typeof img === "string";
        });
        expect(results).to.equal(true);
    });

    it("array should contain image urls", function () {
        var results = imgs.every(function (img) {
            return img.indexOf('.jpg') != -1 ||
                img.indexOf('.jpeg') != -1 ||
                img.indexOf('.gif') != -1 ||
                img.indexOf('.png') != -1;
        });
        expect(results).to.equal(true);
    });

});