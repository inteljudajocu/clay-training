window.modules["506"] = [function(require,module,exports){'use strict';

var Input = require(507);

var SafeParser = require(508);

module.exports = function safeParse(css, opts) {
  var input = new Input(css, opts);

  var parser = new SafeParser(input);
  parser.parse();

  return parser.root;
};

}, {"507":507,"508":508}];
