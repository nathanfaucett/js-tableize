var isString = require("@nathanfaucett/is_string"),
    camelize = require("@nathanfaucett/camelize"),
    underscore = require("@nathanfaucett/underscore"),
    pluralize = require("@nathanfaucett/pluralize");


module.exports = tableize;


function tableize(string, camelcase, locale) {
    if (isString(camelcase)) {
        locale = camelcase;
        camelcase = true;
    }

    return camelcase !== false ? camelize(pluralize(string, locale)) : underscore(pluralize(string, locale));
}
