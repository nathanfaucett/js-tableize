var tape = require("tape"),
    inflections = require("@nathanfaucett/inflections"),
    tableize = require("..");


tape("tableize(string : String[, camelcase : Boolean[, locale : String]])", function(assert) {
    var en = inflections("en");

    en.plural(/$/, "s");
    en.plural(/(ch|sh|ss|[sxz])$/i, "$1es");
    en.plural(/([^aeiouy])y$/i, "$1ies");

    assert.equal(tableize("Box"), "boxes");
    assert.equal(tableize("Sky"), "skies");
    assert.equal(tableize("BikeRider", false), "bike_riders");
    assert.equal(tableize("MegaBigSale"), "megaBigSales");

    assert.end();
});
