var express = require('express');
var router = express.Router();

var imgModel = require('../models/img');
var imgs;

imgModel('public/img', function (results) {
    imgs = results;
});

router.get('/', function (req, res) {
    res.json(imgs);
});


module.exports = router;