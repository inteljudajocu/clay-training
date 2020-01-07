window.modules["recipe.model"] = [function(require,module,exports){'use strict';

var _get = require(1),
    dateFormat = require(3),
    dateParse = require(2),
    utils = require(6),
    has = utils.has;

function formatDate(data, locals) {
  if (_get(locals, 'date')) {
    data.date = dateFormat(locals.date);
  } else if (has(data.articleDate) || has(data.articleTime)) {
    data.articleDate = has(data.articleDate) ? data.articleDate : dateFormat(new Date(), 'YYYY-MM-DD');
    data.articleTime = has(data.articleTime) ? data.articleTime : dateFormat(new Date(), 'HH:mm');
    data.date = dateFormat(dateParse("".concat(data.articleDate, " ").concat(data.articleTime)));
  }
}

function setCanonicalUrl(data, locals) {
  if (_get(locals, 'publishUrl')) {
    data.canonicalUrl = locals.publishUrl;
  }
}

module.exports.save = function (uri, data, locals) {
  formatDate(data, locals);
  setCanonicalUrl(data, locals);
  return data;
};
}, {"1":1,"2":2,"3":3,"6":6}];
