tableize
=======

tableize strings

```javascript
var tableize = require("@nathanfaucett/tableize"),
    inflections = require("@nathanfaucett/inflections");


var en = inflections("en");

en.plural(/$/, "s");
en.plural(/(ch|sh|ss|[sxz])$/i, "$1es");
en.plural(/([^aeiouy])y$/i, "$1ies");

tableize("Box") === "boxes";
tableize("Sky") === "skies";
tableize("BikeRider", false) === "bike_riders";
tableize("MegaBigSale") === "megaBigSales";
```
