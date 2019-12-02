window.modules["recipe.model"] = [function(require,module,exports){'use strict';

var _get = require(2),
    dateFormat = require(3),
    dateParse = require(4),
    utils = require(6),
    has = utils.has;

function formatDate(data, locals) {
  if (_get(locals, 'date')) {
    // if locals and locals.date exists, set the article date (overriding any date already set)
    data.date = dateFormat(locals.date); // ISO 8601 date string
  } else if (has(data.articleDate) || has(data.articleTime)) {
    // make sure both date and time are set. if the user only set one, set the other to today / right now
    data.articleDate = has(data.articleDate) ? data.articleDate : dateFormat(new Date(), 'YYYY-MM-DD');
    data.articleTime = has(data.articleTime) ? data.articleTime : dateFormat(new Date(), 'HH:mm'); // generate the `date` data from these two fields

    data.date = dateFormat(dateParse("".concat(data.articleDate, " ").concat(data.articleTime))); // ISO 8601 date string
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
}, {"2":2,"3":3,"4":4,"6":6}];
