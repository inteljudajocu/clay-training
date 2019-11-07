window.modules["66"] = [function(require,module,exports){function merge() {
    var dest = {};

    for (var i = 0; i < arguments.length; i++) {
        var src = arguments[i];
        for (var key in src) {
            dest[key] = src[key];
        }
    }

    return dest;
}

module.exports = require(97).create(
    merge(
        require(90),
        require(93),
        require(96)
    )
);
}, {"90":90,"93":93,"96":96,"97":97}];
