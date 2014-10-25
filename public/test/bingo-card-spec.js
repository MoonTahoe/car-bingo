describe("Bingo Card", function () {

    describe("loadImages()", function () {

        it("loads images from a api route");

        it("throws error if image route does not return an array");

    });

    describe("getRandom()", function () {

        it("returns an element at random from an array");

        it("removes the returned item from the array");

        it("throws an error if an array is not supplied");

    });

    describe("buildCard()", function () {

        it("returns a card");

        it("the card has a BINGO header");

        it("the card has 5 rows");

        it("the card has 5 cols");

        it("the card has a free space in the center");

    });

});