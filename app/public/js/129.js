window.modules["129"] = [function(require,module,exports){var STRING = require(75).TYPE.String;

module.exports = {
    name: 'String',
    structure: {
        value: String
    },
    parse: function() {
        return {
            type: 'String',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            value: this.scanner.consume(STRING)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
    }
};
}, {"75":75}];
