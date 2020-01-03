window.modules["recipe.model"] = [function(require,module,exports){'use strict';

var _get = require(3),
    dateFormat = require(6),
    dateParse = require(5),
    utils = require(2),
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
}, {"2":2,"3":3,"5":5,"6":6}];
