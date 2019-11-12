window.modules["544"] = [function(require,module,exports){"use strict";

exports.__esModule = true;
exports.default = void 0;

var _stringifier = _interopRequireDefault(require(549));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringify(node, builder) {
  var str = new _stringifier.default(builder);
  str.stringify(node);
}

var _default = stringify;
exports.default = _default;
module.exports = exports.default;

}, {"549":549}];
