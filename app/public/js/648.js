window.modules["648"] = [function(require,module,exports){'use strict';

var _get = require(1),
    _join = require(373),
    _map = require(17),
    _isObject = require(11);
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
}, {"1":1,"11":11,"17":17,"373":373}];
