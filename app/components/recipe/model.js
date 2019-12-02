'use strict';

const _get = require('lodash/get'),
  dateFormat = require('date-fns/format'),
  dateParse = require('date-fns/parse'),
  utils = require('../../services/universal/utils'),
  has = utils.has;

function formatDate(data, locals) {
  if (_get(locals, 'date')) {
    data.date = dateFormat(locals.date);
  } else if (has(data.articleDate) || has(data.articleTime)) {
    data.articleDate = has(data.articleDate)
      ? data.articleDate
      : dateFormat(new Date(), 'YYYY-MM-DD');
    data.articleTime = has(data.articleTime) ? data.articleTime : dateFormat(new Date(), 'HH:mm');
    data.date = dateFormat(dateParse(`${data.articleDate} ${data.articleTime}`));
  }
}

function setCanonicalUrl(data, locals) {
  if (_get(locals, 'publishUrl')) {
    data.canonicalUrl = locals.publishUrl;
  }
}

module.exports.save = function(uri, data, locals) {
  formatDate(data, locals);
  setCanonicalUrl(data, locals);

  return data;
};
