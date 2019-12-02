window.modules["113"] = [function(require,module,exports){var TYPE = require(75).TYPE;
var IDENTIFIER = TYPE.Identifier;

module.exports = {
    name: 'Identifier',
    structure: {
        name: String
    },
    parse: function() {
        return {
            type: 'Identifier',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.name);
    }
};
}, {"75":75}];
