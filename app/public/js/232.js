window.modules["232"] = [function(require,module,exports){module.exports = Stream;

var Parser = require(228);
var WritableStream = require(2).Writable;
var StringDecoder = require(9).StringDecoder;
var Buffer = require(4).Buffer;

function Stream(cbs, options) {
    var parser = (this._parser = new Parser(cbs, options));
    var decoder = (this._decoder = new StringDecoder());

    WritableStream.call(this, { decodeStrings: false });

    this.once("finish", function() {
        parser.end(decoder.end());
    });
}

require(227)(Stream, WritableStream);

Stream.prototype._write = function(chunk, encoding, cb) {
    if (chunk instanceof Buffer) chunk = this._decoder.write(chunk);
    this._parser.write(chunk);
    cb();
};
}, {"2":2,"4":4,"9":9,"227":227,"228":228}];
