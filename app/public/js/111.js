window.modules["111"] = [function(require,module,exports){var TYPE = require(75).TYPE;
var IDENTIFIER = TYPE.Identifier;
var NUMBERSIGN = TYPE.NumberSign;

// '#' ident
module.exports = {
    name: 'IdSelector',
    structure: {
        name: String
    },
    parse: function() {
        this.scanner.eat(NUMBERSIGN);

        return {
            type: 'IdSelector',
            loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER)
        };
    },
    generate: function(processChunk, node) {
        processChunk('#');
        processChunk(node.name);
    }
};
}, {"75":75}];
