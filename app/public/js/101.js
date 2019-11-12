window.modules["101"] = [function(require,module,exports){var CDC = require(75).TYPE.CDC;

module.exports = {
    name: 'CDC',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDC); // -->

        return {
            type: 'CDC',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function(processChunk) {
        processChunk('-->');
    }
};
}, {"75":75}];
