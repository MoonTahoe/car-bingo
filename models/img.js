var fs = require('fs');

module.exports = function (folder, callback) {

    fs.readdir(folder, function (err, list) {

        if (err) {
            throw err;
        }

        callback(list);

    });

};