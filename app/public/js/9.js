window.modules["9"] = [function(require,module,exports){'use strict';

var postcss = require(551),
    nested = require(451),
    safe = require(503),
    csso = require(383),
    simpleVars = require(509);
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
}, {"383":383,"451":451,"503":503,"509":509,"551":551}];
