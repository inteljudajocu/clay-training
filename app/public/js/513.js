window.modules["513"] = [function(require,module,exports){'use strict';

var Input = require(514);

var SafeParser = require(515);

module.exports = function safeParse(css, opts) {
  var input = new Input(css, opts);

  var parser = new SafeParser(input);
  parser.parse();

  return parser.root;
};

}, {"514":514,"515":515}];
