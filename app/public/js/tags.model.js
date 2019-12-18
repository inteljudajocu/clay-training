window.modules["tags.model"] = [function(require,module,exports){'use strict';

var _map = require(18),
    _assign = require(17),
    _set = require(15),
    _includes = require(16),
    _require = require(1),
    removeNonAlphanumericCharacters = _require.removeNonAlphanumericCharacters,
    invisibleTags = [];
/**
 * Removes all non alphanumeric characters from the tags
 * @param {array} items
 * @returns {array}
 */


function normalizeTags() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return items.map(function (_ref) {
    var text = _ref.text;
    return removeNonAlphanumericCharacters(text);
  }).filter(Boolean);
}
/**
 * make sure all tags are lowercase and have trimmed whitespace
 * @param  {array} items
 * @return {array}
 */


function clean(items) {
  return _map(items || [], function (item) {
    return _assign({}, item, {
      text: item.text.toLowerCase().trim()
    });
  });
}
/**
 * set an 'invisible' boolean on tags, if they're in the list above
 * @param {array} items
 * @return {array}
 */


function setInvisible(items) {
  return _map(items || [], function (item) {
    return _set(item, 'invisible', _includes(invisibleTags, item.text));
  });
}

module.exports.save = function (uri, data) {
  var items = data.items;
  items = clean(items); // first, make sure everything is lowercase and has trimmed whitespace

  data.normalizedTags = normalizeTags(items);
  items = setInvisible(items); // then figure out which tags should be invisible

  data.items = items;
  return data;
};
}, {"1":1,"15":15,"16":16,"17":17,"18":18}];
