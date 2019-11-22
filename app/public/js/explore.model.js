window.modules["explore.model"] = [function(require,module,exports){'use strict';

var _require = require(10),
    search = _require.search,
    query = {
  query: {
    match_all: {}
  }
};

module.exports.render = function (uri, data) {
  return search('local_recipes', query).then(function (_ref) {
    var hits = _ref.hits;
    return hits.hits;
  }).then(function (hits) {
    return hits.map(function (_ref2) {
      var _source = _ref2._source;
      return _source;
    });
  }).then(function (res) {
    data.recipes = res;
    return data;
  });
};
}, {"10":10}];
