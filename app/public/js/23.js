window.modules["23"] = [function(require,module,exports){'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var popup = require(645);

var sharePopUp =
/*#__PURE__*/
function () {
  /**
   * Create a Popup for share services
   * @param {Node} shareLink - html anchor tag
   * @param {string} shareURL - url of page to be shared
   */
  function sharePopUp(shareLink, shareURL) {
    _classCallCheck(this, sharePopUp);

    this.shareLink = shareLink;
    this.shareURL = shareURL;
    this.shareService = this.shareLink.getAttribute('data-shareService') || null;
    this.shareTitle = this.shareLink.getAttribute('title') || 'Clay Starter';
    this.setDimensions();
    this.addShareURL();
    this.addClickHandler();
  }

  _createClass(sharePopUp, [{
    key: "addShareURL",
    value: function addShareURL() {
      switch (this.shareService) {
        case 'twitter':
          this.shareLink.href = "https://twitter.com/share?text=".concat(encodeURIComponent(this.shareTitle), "&url='").concat(this.shareURL, "?utm_source=tw&utm_medium=s3&utm_campaign=sharebutton-t");
          break;

        case 'facebook':
          this.shareLink.href = "http://www.facebook.com/sharer/sharer.php?u=".concat(this.shareURL, "?utm_source=fb&utm_medium=s3&utm_campaign=sharebutton-t");
          break;

        default:
      }
    }
  }, {
    key: "addClickHandler",
    value: function addClickHandler() {
      this.shareLink.addEventListener('click', this.handleClick.bind(this));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      var dimensions = this.popupDimensions[this.shareService] || this.popupDimensions.default;
      popup.openPopUp(this.shareLink.href, dimensions);
    }
  }, {
    key: "setDimensions",
    value: function setDimensions() {
      this.popupDimensions = {
        default: {
          w: 520,
          h: 304
        },
        facebook: {
          w: 520,
          h: 304
        },
        twitter: {
          w: 550,
          h: 572
        }
      };
    }
  }]);

  return sharePopUp;
}();

module.exports = sharePopUp;
}, {"645":645}];
