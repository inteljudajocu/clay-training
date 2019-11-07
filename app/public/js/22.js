window.modules["22"] = [function(require,module,exports){'use strict';

var postcss = require(554),
    nested = require(454),
    safe = require(506),
    csso = require(386),
    simpleVars = require(512);
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
}, {"386":386,"454":454,"506":506,"512":512,"554":554}];
