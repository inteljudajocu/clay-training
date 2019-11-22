window.modules["9"] = [function(require,module,exports){'use strict';

var postcss = require(561),
    nested = require(461),
    safe = require(513),
    csso = require(393),
    simpleVars = require(519);
/**
 * render scoped css using postcss
 * @param {string} uri uri of component
 * @param {string} styles custom style
 * @returns {string} css scoped style
 */


function render(uri, styles) {
  return postcss([nested, simpleVars, csso]).process("[data-uri=\"".concat(uri, "\"] { ").concat(styles, " }"), {
    parser: safe
  }).then(function (result) {
    return result.css;
  });
}

module.exports.render = render;
}, {"393":393,"461":461,"513":513,"519":519,"561":561}];
