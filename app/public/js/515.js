window.modules["515"] = [function(require,module,exports){'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tokenizer = require(516);
var Comment = require(517);
var Parser = require(518);

var SafeParser = function (_Parser) {
  _inherits(SafeParser, _Parser);

  function SafeParser() {
    _classCallCheck(this, SafeParser);

    return _possibleConstructorReturn(this, _Parser.apply(this, arguments));
  }

  SafeParser.prototype.createTokenizer = function createTokenizer() {
    this.tokenizer = tokenizer(this.input, { ignoreErrors: true });
  };

  SafeParser.prototype.comment = function comment(token) {
    var node = new Comment();
    this.init(node, token[2], token[3]);
    node.source.end = { line: token[4], column: token[5] };

    var text = token[1].slice(2);
    if (text.slice(-2) === '*/') text = text.slice(0, -2);

    if (/^\s*$/.test(text)) {
      node.text = '';
      node.raws.left = text;
      node.raws.right = '';
    } else {
      var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
      node.text = match[2];
      node.raws.left = match[1];
      node.raws.right = match[3];
    }
  };

  SafeParser.prototype.decl = function decl(tokens) {
    if (tokens.length > 1) {
      _Parser.prototype.decl.call(this, tokens);
    }
  };

  SafeParser.prototype.unclosedBracket = function unclosedBracket() {};

  SafeParser.prototype.unknownWord = function unknownWord(tokens) {
    this.spaces += tokens.map(function (i) {
      return i[1];
    }).join('');
  };

  SafeParser.prototype.unexpectedClose = function unexpectedClose() {
    this.current.raws.after += '}';
  };

  SafeParser.prototype.doubleColon = function doubleColon() {};

  SafeParser.prototype.unnamedAtrule = function unnamedAtrule(node) {
    node.name = '';
  };

  SafeParser.prototype.precheckMissedSemicolon = function precheckMissedSemicolon(tokens) {
    var colon = this.colon(tokens);
    if (colon === false) return;

    var split = void 0;
    for (split = colon - 1; split >= 0; split--) {
      if (tokens[split][0] === 'word') break;
    }
    for (split -= 1; split >= 0; split--) {
      if (tokens[split][0] !== 'space') {
        split += 1;
        break;
      }
    }
    var other = tokens.splice(split, tokens.length - split);
    this.decl(other);
  };

  SafeParser.prototype.checkMissedSemicolon = function checkMissedSemicolon() {};

  SafeParser.prototype.endFile = function endFile() {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.current.raws.after = (this.current.raws.after || '') + this.spaces;

    while (this.current.parent) {
      this.current = this.current.parent;
      this.current.raws.after = '';
    }
  };

  return SafeParser;
}(Parser);

module.exports = SafeParser;

}, {"516":516,"517":517,"518":518}];
