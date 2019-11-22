window.modules["10"] = [function(require,module,exports){'use strict';

var rest = require(654);

function search(index, query) {
  return rest.post('localhost/_search', {
    index: index,
    body: query
  });
}

module.exports.search = search;
}, {"654":654}];
