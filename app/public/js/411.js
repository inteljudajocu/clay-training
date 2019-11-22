window.modules["411"] = [function(require,module,exports){var resolveKeyword = require(58).keyword;
var compressKeyframes = require(412);

module.exports = function(node) {
    // compress @keyframe selectors
    if (resolveKeyword(node.name).name === 'keyframes') {
        compressKeyframes(node);
    }
};
}, {"58":58,"412":412}];
