window.modules["503"] = [function(require,module,exports){'use strict';

var Input = require(504);

var SafeParser = require(505);

module.exports = function safeParse(css, opts) {
  var input = new Input(css, opts);

  var parser = new SafeParser(input);
  parser.parse();

  return parser.root;
};

}, {"504":504,"505":505}];
