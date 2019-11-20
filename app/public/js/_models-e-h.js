window.modules["explore.model"] = [function(require,module,exports){'use strict';

var _get = require(1),
    defaultWidth = 'inline';

module.exports.render = function (uri, data) {
  return data;
};

module.exports.save = function (uri, data) {
  var imageAspectRatio = _get(data, 'imageAspectRatio', null),
      imageAspectRatioFlexOverride = _get(data, 'imageAspectRatioFlexOverride', false),
      imageCaption = _get(data, 'imageCaption', null),
      imageCreditOverride = _get(data, 'imageCreditOverride', null),
      imageUrl = _get(data, 'imageUrl', null),
      imageWidth = _get(data, 'imageWidth', null) || defaultWidth,
      image = {
    imageAspectRatio: imageAspectRatio,
    imageAspectRatioFlexOverride: imageAspectRatioFlexOverride,
    imageCaption: imageCaption,
    imageCredit: imageCreditOverride,
    imageType: 'Photo',
    imageUrl: imageUrl,
    imageWidth: imageWidth
  };

  return Object.assign(data, image);
};
}, {"1":1}];
window.modules["header.model"] = [function(require,module,exports){'use strict';

module.exports.save = function (uri, data) {
  if (data.siteLogo) {
    data.isSVGString = data.siteLogo.trim().substr(0, 4).toLowerCase() === '<svg';
  }

  return data;
};
}, {}];
