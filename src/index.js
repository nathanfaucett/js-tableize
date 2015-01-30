var isString = require("is_string"),
    camelize = require("camelize"),
    underscore = require("underscore"),
    pluralize = require("pluralize");


module.exports = function tableize(string, camelcase, locale) {
    if (isString(camelcase)) {
        locale = camelcase;
        camelcase = true;
    }

    return camelcase !== false ? camelize(pluralize(string, locale)) : underscore(pluralize(string, locale));
};
