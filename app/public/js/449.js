window.modules["449"] = [function(require,module,exports){'use strict';

exports.__esModule = true;
exports.default = stringify;

var _stringifier = require(455);

var _stringifier2 = _interopRequireDefault(_stringifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringify(node, builder) {
    var str = new _stringifier2.default(builder);
    str.stringify(node);
}
module.exports = exports['default'];

}, {"455":455}];
