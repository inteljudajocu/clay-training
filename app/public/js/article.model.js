window.modules["article.model"] = [function(require,module,exports){'use strict';

var _get = require(1),
    striptags = require(4),
    dateFormat = require(3),
    dateParse = require(2),
    utils = require(6),
    has = utils.has,
    // convenience
sanitize = require(5);
/**
 * only allow emphasis, italic, and strikethroughs in headlines
 * @param  {string} oldHeadline
 * @returns {string}
 */


function stripHeadlineTags(oldHeadline) {
  var newHeadline = striptags(oldHeadline, ['em', 'i', 'strike']); // if any tags include a trailing space, shift it to outside the tag

  return newHeadline.replace(/ <\/(i|em|strike)>/g, '</$1> ');
}
/**
 * sanitize headline
 * @param  {object} data
 */


function sanitizeInputs(data) {
  if (has(data.headline)) {
    data.headline = sanitize.toSmartHeadline(stripHeadlineTags(data.headline));
  }
}
/**
 * set the publish date from the locals (even if it's already set),
 * and format it correctly
 * @param  {object} data
 * @param  {object} locals
 */


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
/**
 * set the canonical url from the locals (even if it's already set)
 * @param {object} data
 * @param {object} locals
 */


function setCanonicalUrl(data, locals) {
  if (_get(locals, 'publishUrl')) {
    data.canonicalUrl = locals.publishUrl;
  }
}
/**
 * Set the feed image to the lede url if it isn't already set
 * @param  {object} data
 */


function generateFeedImage(data) {
  if (data.ledeUrl) {
    data.feedImgUrl = data.ledeUrl;
  }
}

module.exports.save = function (uri, data, locals) {
  // first, let's get all the synchronous stuff out of the way:
  // sanitizing inputs, setting fields, etc
  sanitizeInputs(data);
  formatDate(data, locals);
  setCanonicalUrl(data, locals);
  generateFeedImage(data);
  return data;
};
}, {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6}];
