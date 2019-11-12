window.modules["122"] = [function(require,module,exports){var List = require(53);
var TYPE = require(75).TYPE;

var IDENTIFIER = TYPE.Identifier;
var FUNCTION = TYPE.Function;
var COLON = TYPE.Colon;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// :: ident [ '(' .. ')' ]?
module.exports = {
    name: 'PseudoElementSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = null;
        var name;
        var nameLowerCase;

        this.scanner.eat(COLON);
        this.scanner.eat(COLON);

        if (this.scanner.tokenType === FUNCTION) {
            name = this.scanner.consumeFunctionName();
            nameLowerCase = name.toLowerCase();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = new List().appendData(
                    this.Raw(this.scanner.currentToken, 0, 0, false, false)
                );
            }

            this.scanner.eat(RIGHTPARENTHESIS);
        } else {
            name = this.scanner.consume(IDENTIFIER);
        }

        return {
            type: 'PseudoElementSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk('::');
        processChunk(node.name);

        if (node.children !== null) {
            processChunk('(');
            this.each(processChunk, node);
            processChunk(')');
        }
    },
    walkContext: 'function'
};
}, {"53":53,"75":75}];
