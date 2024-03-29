window.modules["133"] = [function(require,module,exports){var TYPE = require(75).TYPE;

var STRING = TYPE.String;
var URL = TYPE.Url;
var RAW = TYPE.Raw;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// url '(' S* (string | raw) S* ')'
module.exports = {
    name: 'Url',
    structure: {
        value: ['String', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value;

        this.scanner.eat(URL);
        this.scanner.skipSC();

        switch (this.scanner.tokenType) {
            case STRING:
                value = this.String();
                break;

            case RAW:
                value = this.Raw(this.scanner.currentToken, 0, RAW, true, false);
                break;

            default:
                this.scanner.error('String or Raw is expected');
        }

        this.scanner.skipSC();
        this.scanner.eat(RIGHTPARENTHESIS);

        return {
            type: 'Url',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value
        };
    },
    generate: function(processChunk, node) {
        processChunk('url');
        processChunk('(');
        this.generate(processChunk, node.value);
        processChunk(')');
    }
};
}, {"75":75}];
