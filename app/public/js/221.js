window.modules["221"] = [function(require,module,exports){var Parser = require(228);
var DomHandler = require(193);

function defineProp(name, value) {
    delete module.exports[name];
    module.exports[name] = value;
    return value;
}

module.exports = {
    Parser: Parser,
    Tokenizer: require(229),
    ElementType: require(191),
    DomHandler: DomHandler,
    get FeedHandler() {
        return defineProp("FeedHandler", require(226));
    },
    get Stream() {
        return defineProp("Stream", require(231));
    },
    get WritableStream() {
        return defineProp("WritableStream", require(232));
    },
    get ProxyHandler() {
        return defineProp("ProxyHandler", require(230));
    },
    get DomUtils() {
        return defineProp("DomUtils", require(196));
    },
    get CollectingHandler() {
        return defineProp(
            "CollectingHandler",
            require(225)
        );
    },
    // For legacy support
    DefaultHandler: DomHandler,
    get RssHandler() {
        return defineProp("RssHandler", this.FeedHandler);
    },
    //helper methods
    parseDOM: function(data, options) {
        var handler = new DomHandler(options);
        new Parser(handler, options).end(data);
        return handler.dom;
    },
    parseFeed: function(feed, options) {
        var handler = new module.exports.FeedHandler(options);
        new Parser(handler, options).end(feed);
        return handler.dom;
    },
    createDomStream: function(cb, options, elementCb) {
        var handler = new DomHandler(cb, options, elementCb);
        return new Parser(handler, options);
    },
    // List of all events that the parser emits
    EVENTS: {
        /* Format: eventname: number of arguments */
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
    }
};
}, {"191":191,"193":193,"196":196,"225":225,"226":226,"228":228,"229":229,"230":230,"231":231,"232":232}];
