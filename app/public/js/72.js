window.modules["72"] = [function(require,module,exports){'use strict';

var createCustomError = require(71);

var SyntaxParseError = function(message, syntaxStr, offset) {
    var error = createCustomError('SyntaxParseError', message);

    error.rawMessage = message;
    error.syntax = syntaxStr;
    error.offset = offset;
    error.message = error.rawMessage + '\n' +
        '  ' + error.syntax + '\n' +
        '--' + new Array((error.offset || error.syntax.length) + 1).join('-') + '^';

    return error;
};

module.exports = {
    SyntaxParseError: SyntaxParseError
};
}, {"71":71}];
