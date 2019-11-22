window.modules["header.client"] = [function(require,module,exports){'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sharePopUp = require(11);

module.exports = function () {
  var canonicalEl = document.querySelector('link[rel="canonical"]'),
      canonicalURL = canonicalEl.getAttribute('href'),
      shareURL = canonicalURL.trim() || document.location.href;

  _toConsumableArray(document.querySelectorAll('header.header .share-link')).forEach(function (shareLink) {
    new sharePopUp(shareLink, shareURL);
  });
};
}, {"11":11}];
