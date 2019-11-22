window.modules["227"] = [function(require,module,exports){module.exports = Stream;

var Parser = require(223);
var WritableStream = require(20).Writable;
var StringDecoder = require(228).StringDecoder;
var Buffer = require(22).Buffer;

function Stream(cbs, options) {
    var parser = (this._parser = new Parser(cbs, options));
    var decoder = (this._decoder = new StringDecoder());

    WritableStream.call(this, { decodeStrings: false });

    this.once("finish", function() {
        parser.end(decoder.end());
    });
}

require(222)(Stream, WritableStream);

Stream.prototype._write = function(chunk, encoding, cb) {
    if (chunk instanceof Buffer) chunk = this._decoder.write(chunk);
    this._parser.write(chunk);
    cb();
};
}, {"20":20,"22":22,"222":222,"223":223,"228":228}];
