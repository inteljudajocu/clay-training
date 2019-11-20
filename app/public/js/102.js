window.modules["102"] = [function(require,module,exports){var CDO = require(74).TYPE.CDO;

module.exports = {
    name: 'CDO',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDO); // <!--

        return {
            type: 'CDO',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function(processChunk) {
        processChunk('<!--');
    }
};
}, {"74":74}];
