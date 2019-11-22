window.modules["656"] = [function(require,module,exports){'use strict';

var formatTime = require(661),
    truncate = require(662);
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
  byline: require(659),
  secondsToISO: formatTime.secondsToISO,
  formatDateRange: formatTime.formatDateRange,
  isPublished24HrsAgo: formatTime.isPublished24HrsAgo,
  hrsOnlyTimestamp: formatTime.hrsOnlyTimestamp,
  articleTimestamp: require(658),
  truncateText: truncate,
  calloutType: require(660)
};
}, {"658":658,"659":659,"660":660,"661":661,"662":662}];
