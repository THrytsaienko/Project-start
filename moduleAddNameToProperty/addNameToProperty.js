var postcss = require('postcss');

function replaceProp(str) {
    var newProp = `-pikachu-${str}`;
    return str.replace(str, newProp);
}

module.exports = postcss.plugin('addNameToProperty', function addNameToProperty(options) {
    return function (css) {
        options = options || {};
        css.walkRules(function (rule) {
            rule.walkDecls(function (decl, i) {
                var newProperty = decl.prop;
                newProperty = replaceProp(newProperty);
                decl.prop = newProperty;
            });
        });
    }
});