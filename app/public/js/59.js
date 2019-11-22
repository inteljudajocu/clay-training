window.modules["59"] = [function(require,module,exports){function merge() {
    var dest = {};

    for (var i = 0; i < arguments.length; i++) {
        var src = arguments[i];
        for (var key in src) {
            dest[key] = src[key];
        }
    }

    return dest;
}

module.exports = require(90).create(
    merge(
        require(83),
        require(86),
        require(89)
    )
);
}, {"83":83,"86":86,"89":89,"90":90}];
