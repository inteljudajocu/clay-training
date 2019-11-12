window.modules["58"] = [function(require,module,exports){function merge() {
    var dest = {};

    for (var i = 0; i < arguments.length; i++) {
        var src = arguments[i];
        for (var key in src) {
            dest[key] = src[key];
        }
    }

    return dest;
}

module.exports = require(89).create(
    merge(
        require(82),
        require(85),
        require(88)
    )
);
}, {"82":82,"85":85,"88":88,"89":89}];
