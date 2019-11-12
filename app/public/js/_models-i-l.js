window.modules["image.model"] = [function(require,module,exports){'use strict';

var _get = require(2),
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
}, {"2":2}];
window.modules["list.model"] = [function(require,module,exports){'use strict';

var striptags = require(3),
    _require = require(4),
    has = _require.has,
    isFieldEmpty = _require.isFieldEmpty,
    _require2 = require(9),
    render = _require2.render,
    _require3 = require(1),
    toSmartText = _require3.toSmartText;

module.exports.save = function (uri, data) {
  var allowedTags = ['strong', 'em', 's', 'a', 'span'];
  data.listType = data.orderedList ? 'ol' : 'ul';

  if (has(data.items)) {
    data.items.forEach(function (item) {
      item.text = toSmartText(striptags(item.text, allowedTags));
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
}, {"1":1,"3":3,"4":4,"9":9}];
