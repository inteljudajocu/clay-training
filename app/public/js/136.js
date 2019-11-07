window.modules["136"] = [function(require,module,exports){var STRING = require(82).TYPE.String;

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
}, {"82":82}];
