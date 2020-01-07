window.modules["659"] = [function(require,module,exports){'use strict';

var _get = require(1),
    _join = require(384),
    _map = require(18),
    _isObject = require(12);
/**
 * Comma separate a list of author strings
 * or simple-list objects
 *
 * @param  {String[]} opts
 * @return {String}
 */


function formatSimpleByline() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var bylines = _get(opts.hash, 'bylines', []),
      authors = _map(bylines, function (author) {
    return _isObject(author) ? author.text : author;
  });

  if (authors.length === 1) {
    return "<span>".concat(authors[0], "</span>");
  } else if (authors.length === 2) {
    return "<span>".concat(authors[0], "</span><span class=\"and\"> and </span><span>").concat(authors[1], "</span>");
  } else {
    return _join(_map(authors, function (author, idx) {
      return idx < authors.length - 1 ? "<span>".concat(author, ", </span>") : "<span class=\"and\">and </span><span>".concat(author, "</span>");
    }), '');
  }
}

module.exports = formatSimpleByline;
}, {"1":1,"12":12,"18":18,"384":384}];
