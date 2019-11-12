window.modules["77"] = [function(require,module,exports){var List = require(53);
var TYPE = require(75).TYPE;

var STRING = TYPE.String;
var IDENTIFIER = TYPE.Identifier;
var URL = TYPE.Url;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

module.exports = {
    parse: {
        prelude: function() {
            var children = new List();

            this.scanner.skipSC();

            switch (this.scanner.tokenType) {
                case STRING:
                    children.appendData(this.String());
                    break;

                case URL:
                    children.appendData(this.Url());
                    break;

                default:
                    this.scanner.error('String or url() is expected');
            }

            if (this.scanner.lookupNonWSType(0) === IDENTIFIER ||
                this.scanner.lookupNonWSType(0) === LEFTPARENTHESIS) {
                children.appendData(this.WhiteSpace());
                children.appendData(this.MediaQueryList());
            }

            return children;
        },
        block: null
    }
};
}, {"53":53,"75":75}];
