var zombie = require('zombie');

module.exports = function() {

    var browser = new zombie();
    var root = "http://localhost:3000";

    this.When(/^I request a new card at "([^"]*)"$/, function (url, callback) {

        browser.visit(root + url, function() {
            browser.assert.success();
            callback();
        });

    });

    this.Then(/^I should receive a car bingo card$/, function (callback) {

        browser.assert.element('table.bingo-card');
        browser.assert.elements('table.bingo-card>tbody>tr', 5);
        browser.assert.elements('table.bingo-card td.cell', 24);
        browser.assert.elements('table.bingo-card td.free-cell', 1);
        callback();

    });

    this.Given(/^No two images should be the same$/, function (callback) {

        var tds = browser.elements('td.cell');

        tds.forEach(function(td) {
            tds.forEach(function(check) {
               expect( td.style.backgroundImage ).to.not.equal( check.style.backgroundImage );
            });
        });

        callback();
    });

};