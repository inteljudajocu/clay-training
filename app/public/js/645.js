window.modules["645"] = [function(require,module,exports){'use strict';

var formatTime = require(650),
    truncate = require(651);
/**
 * Given a number or a string of a number, increment
 * the value and return it.
 *
 * @param {String|Number} index
 * @param {Number} inc
 * @returns {Number}
 */


function incrementIndex(index) {
  var inc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (typeof index !== 'number') index = parseInt(index, 10);
  return index + inc;
}

module.exports = {
  incIndex: incrementIndex,
  byline: require(648),
  secondsToISO: formatTime.secondsToISO,
  formatDateRange: formatTime.formatDateRange,
  isPublished24HrsAgo: formatTime.isPublished24HrsAgo,
  hrsOnlyTimestamp: formatTime.hrsOnlyTimestamp,
  articleTimestamp: require(647),
  truncateText: truncate,
  calloutType: require(649)
};
}, {"647":647,"648":648,"649":649,"650":650,"651":651}];
