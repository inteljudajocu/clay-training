window.modules["404"] = [function(require,module,exports){var resolveKeyword = require(65).keyword;
var compressKeyframes = require(405);

module.exports = function(node) {
    // compress @keyframe selectors
    if (resolveKeyword(node.name).name === 'keyframes') {
        compressKeyframes(node);
    }
};
}, {"65":65,"405":405}];
