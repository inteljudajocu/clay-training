window.modules["code-sample.model"] = [function(require,module,exports){'use strict';

var Prism = require(8);

require(7);

module.exports.save = function (uri, data) {
  // Adds manual spaces, Kiln codemirror doesn't recognizes tab spaces
  data.code = data.code.replace(/\t/g, '  '); // Returns a highlighted HTML string

  data.html = Prism.highlight(data.code, Prism.languages[data.language], data.language);
  return data;
};
}, {"7":7,"8":8}];
