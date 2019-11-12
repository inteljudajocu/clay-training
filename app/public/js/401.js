window.modules["401"] = [function(require,module,exports){var resolveKeyword = require(57).keyword;
var compressKeyframes = require(402);

module.exports = function(node) {
    // compress @keyframe selectors
    if (resolveKeyword(node.name).name === 'keyframes') {
        compressKeyframes(node);
    }
};
}, {"57":57,"402":402}];
