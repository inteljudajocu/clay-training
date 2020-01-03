window.modules["article.model"] = [function(require,module,exports){'use strict';

var _get = require(3),
    striptags = require(4),
    dateFormat = require(6),
    dateParse = require(5),
    utils = require(2),
    has = utils.has,
    // convenience
sanitize = require(1);
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
window.modules["code-sample.model"] = [function(require,module,exports){'use strict';

var Prism = require(8);

require(7);

module.exports.save = function (uri, data) {
  // Adds manual spaces, Kiln codemirror doesn't recognizes tab spaces
  data.code = data.code.replace(/\t/g, '  '); // Returns a highlighted HTML string

  data.html = Prism.highlight(data.code, Prism.languages[data.language], data.language);
  return data;
};
}, {"7":7,"8":8}];
window.modules["direcctions.model"] = [function(require,module,exports){'use strict';

var striptags = require(4),
    _require = require(2),
    has = _require.has,
    isFieldEmpty = _require.isFieldEmpty,
    _require2 = require(9),
    render = _require2.render,
    _require3 = require(1),
    toSmartText = _require3.toSmartText;

module.exports.save = function (uri, data) {
  var allowedTags = ['strong', 'em', 's', 'a', 'span'];

  if (has(data.items)) {
    data.items.forEach(function (item) {
      item.ingredients = toSmartText(striptags(item.ingredients, allowedTags));
    });
  }

  if (isFieldEmpty(data.sass)) {
    delete data.css;
    return data;
  } else {
    return render(uri, data.sass).then(function (css) {
      data.css = css;
      return data;
    });
  }
};
}, {"1":1,"2":2,"4":4,"9":9}];
window.modules["divider.model"] = [function(require,module,exports){'use strict';

var sanitize = require(1);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  return data;
};
}, {"1":1}];
