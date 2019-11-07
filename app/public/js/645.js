window.modules["645"] = [function(require,module,exports){'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var service =
/*#__PURE__*/
function () {
  function service() {
    _classCallCheck(this, service);
  }

  _createClass(service, [{
    key: "getWindowSize",
    value: function getWindowSize() {
      var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left,
          dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top,
          width = window.innerWidth || document.documentElement.clientWidth || screen.width,
          height = window.innerHeight || document.documentElement.clientHeight || screen.height;
      return {
        dualScreenLeft: dualScreenLeft,
        dualScreenTop: dualScreenTop,
        height: height,
        width: width
      };
    }
  }, {
    key: "getCenterPosition",
    value: function getCenterPosition(windowSize, dimensions) {
      var left = windowSize.width / 2 - dimensions.w / 2 + windowSize.dualScreenLeft,
          top = windowSize.height / 2 - dimensions.h / 2 + windowSize.dualScreenTop;
      return {
        left: left,
        top: top
      };
    }
    /**
     * openPopup Window
     * @param {string} url - address of the popup page
     * @param {object} dimensions { w: width of popup, h: height of popup}
     */

  }, {
    key: "openPopUp",
    value: function openPopUp(url, dimensions) {
      var popupPosition = this.getCenterPosition(this.getWindowSize(), dimensions),
          params = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,\nwidth=".concat(dimensions.w, ",height=").concat(dimensions.h, ",left=").concat(popupPosition.left, ",top=").concat(popupPosition.top);
      window.open(url, 'popup', params);
    }
  }]);

  return service;
}();

module.exports = new service();
}, {}];
