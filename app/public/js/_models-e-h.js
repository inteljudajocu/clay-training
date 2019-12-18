window.modules["explore.model"] = [function(require,module,exports){'use strict';

var _require = require(10),
    search = _require.search,
    query = {
  size: 5,
  // sort: [
  //   {
  //     date: 'desc'
  //   }
  // ],
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
window.modules["header.model"] = [function(require,module,exports){'use strict';

module.exports.save = function (uri, data) {
  if (data.siteLogo) {
    data.isSVGString = data.siteLogo.trim().substr(0, 4).toLowerCase() === '<svg';
  }

  return data;
};
}, {}];
