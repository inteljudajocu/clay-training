window.modules["226"] = [function(require,module,exports){module.exports = Stream;

var Parser = require(222);
var WritableStream = require(19).Writable;
var StringDecoder = require(227).StringDecoder;
var Buffer = require(21).Buffer;

function Stream(cbs, options) {
    var parser = (this._parser = new Parser(cbs, options));
    var decoder = (this._decoder = new StringDecoder());

    WritableStream.call(this, { decodeStrings: false });

    this.once("finish", function() {
        parser.end(decoder.end());
    });
}

require(221)(Stream, WritableStream);

Stream.prototype._write = function(chunk, encoding, cb) {
    if (chunk instanceof Buffer) chunk = this._decoder.write(chunk);
    this._parser.write(chunk);
    cb();
};
}, {"19":19,"21":21,"221":221,"222":222,"227":227}];
