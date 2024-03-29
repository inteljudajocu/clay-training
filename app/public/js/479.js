window.modules["479"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _namespace = require(484);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = require(470);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ID = function (_Namespace) {
    _inherits(ID, _Namespace);

    function ID(opts) {
        _classCallCheck(this, ID);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.ID;
        return _this;
    }

    ID.prototype.toString = function toString() {
        return [this.spaces.before, this.ns, String('#' + this.value), this.spaces.after].join('');
    };

    return ID;
}(_namespace2.default);

exports.default = ID;
module.exports = exports['default'];}, {"470":470,"484":484}];
