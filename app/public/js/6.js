window.modules["6"] = [function(require,module,exports){(function (process){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _isArray = require(275),
    _isObject = require(12),
    _isEmpty = require(14),
    _isString = require(377),
    _isNull = require(381),
    _isUndefined = require(383),
    _get = require(1),
    _parse = require(652),
    publishedVersionSuffix = '@published',
    kilnUrlParam = '&currentUrl=';
/**
 * determine if a field is empty
 * @param  {*}  val
 * @return {Boolean}
 */


function isFieldEmpty(val) {
  if (_isArray(val) || _isObject(val)) {
    return _isEmpty(val);
  } else if (_isString(val)) {
    return val.length === 0; // emptystring is empty
  } else if (_isNull(val) || _isUndefined(val)) {
    return true; // null and undefined are empty
  } else {
    // numbers, booleans, etc are never empty
    return false;
  }
}
/**
 * convenience function to determine if a field exists and has a value
 * @param  {*}  val
 * @return {Boolean}
 */


function has(val) {
  return !isFieldEmpty(val);
}
/**
 * replace version in uri
 * e.g. when fetching @published data, or previous component data
 * @param  {string} uri
 * @param  {string} [version] defaults to latest
 * @return {string}
 */


function replaceVersion(uri, version) {
  if (!_isString(uri)) {
    throw new TypeError('Uri must be a string, not ' + _typeof(uri));
  }

  if (version) {
    uri = uri.split('@')[0] + '@' + version;
  } else {
    // no version is still a kind of version
    uri = uri.split('@')[0];
  }

  return uri;
}
/**
 * generate a url from a uri (and some site data)
 * @param  {string} uri
 * @param  {object} locals
 * @return {string}
 */


function uriToUrl(uri, locals) {
  var protocol = _get(locals, 'site.protocol') || 'http',
      port = _get(locals, 'site.port'),
      parsed = _parse("".concat(protocol, "://").concat(uri));

  if (port !== 80) {
    parsed.set('port', port);
  }

  return parsed.href;
}
/**
 * generate a uri from a url
 * @param  {string} url
 * @return {string}
 */


function urlToUri(url) {
  var parsed = _parse(url);

  return "".concat(parsed.hostname).concat(parsed.pathname);
}
/**
 * Make sure start is defined and within a justifiable range
 *
 * @param {int} n
 * @returns {int}
 */


function formatStart(n) {
  var min = 0,
      max = 100000000;

  if (typeof n === 'undefined' || Number.isNaN(n) || n < min || n > max) {
    return 0;
  } else {
    return n;
  }
}
/*
 *
 * @param {object} locals
 * @param {string} [locals.site.protocol]
 * @param {string} locals.site.host
 * @param {string} [locals.site.port]
 * @param {string} [locals.site.path]
 * @returns {string} e.g. `http://localhost/somesite`
 */


function getSiteBaseUrl(locals) {
  var site = locals.site || {},
      protocol = site.protocol || 'http',
      host = site.host,
      port = (site.port || '80').toString(),
      path = site.path || '';
  return "".concat(protocol, "://").concat(host).concat(port === '80' ? '' : ':' + port).concat(path);
}
/**
 *
 * @param {string} uri
 * @returns {boolean}
 */


function isPublishedVersion(uri) {
  return uri.indexOf(publishedVersionSuffix) === uri.length - 10;
}
/**
 * takes a uri and always returns the published version of that uri
 * @param {string} uri
 * @returns {string}
 */


function ensurePublishedVersion(uri) {
  return isPublishedVersion(uri) ? uri : uri.split('@')[0] + publishedVersionSuffix;
}
/**
 * checks if uri is an instance of a component
 * @param {string} uri
 * @returns {boolean}
 */


function isInstance(uri) {
  return uri.indexOf('/instances/') > -1;
}
/**
 * kiln sometimes stores the url in a query param
 * @param {string} url
 * @returns {string}
 */


function kilnUrlToPageUrl(url) {
  return url.indexOf(kilnUrlParam) > -1 ? decodeURIComponent(url.split(kilnUrlParam).pop()) : url;
}
/**
 * removes query params and hashes
 * e.g. `http://canonicalurl?utm-source=facebook#heading` becomes `http://canonicalurl`
 * @param {string} url
 * @returns {string}
 */


function urlToCanonicalUrl(url) {
  return kilnUrlToPageUrl(url).split('?')[0].split('#')[0];
}
/**
 * prefixes a given elastic index depending on the current environment
 * e.g. `published-articles` becomes `local_published-articles`
 * @param {string} indexString
 * @returns {string}
 */


function prefixElasticIndex(indexString) {
  var prefix = window.process.env.ELASTIC_PREFIX;
  return prefix ? indexString.split(',').map(function (index) {
    return "".concat(prefix, "_").concat(index).trim();
  }).join(',') : indexString;
}

module.exports.isFieldEmpty = isFieldEmpty;
module.exports.has = has;
module.exports.replaceVersion = replaceVersion;
module.exports.uriToUrl = uriToUrl;
module.exports.urlToUri = urlToUri;
module.exports.formatStart = formatStart;
module.exports.getSiteBaseUrl = getSiteBaseUrl;
module.exports.isPublishedVersion = isPublishedVersion;
module.exports.ensurePublishedVersion = ensurePublishedVersion;
module.exports.isInstance = isInstance;
module.exports.urlToCanonicalUrl = urlToCanonicalUrl;
module.exports.prefixElasticIndex = prefixElasticIndex;

}).call(this,require(233))}, {"1":1,"12":12,"14":14,"233":233,"275":275,"377":377,"381":381,"383":383,"652":652}];
