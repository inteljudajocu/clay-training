window.modules["recipe.model"] = [function(require,module,exports){'use strict';

var _get = require(3),
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
}, {"3":3}];
window.modules["subheader.model"] = [function(require,module,exports){'use strict';

var sanitize = require(2);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  data.subheaderId = "".concat(data.subheaderId || data.text).trim().replace(/\s+/g, '-');
  return data;
};
}, {"2":2}];
window.modules["tags.model"] = [function(require,module,exports){'use strict';

var _map = require(18),
    _assign = require(16),
    _set = require(15),
    _includes = require(17),
    _require = require(2),
    removeNonAlphanumericCharacters = _require.removeNonAlphanumericCharacters,
    invisibleTags = [];
/**
 * Removes all non alphanumeric characters from the tags
 * @param {array} items
 * @returns {array}
 */


function normalizeTags() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return items.map(function (_ref) {
    var text = _ref.text;
    return removeNonAlphanumericCharacters(text);
  }).filter(Boolean);
}
/**
 * make sure all tags are lowercase and have trimmed whitespace
 * @param  {array} items
 * @return {array}
 */


function clean(items) {
  return _map(items || [], function (item) {
    return _assign({}, item, {
      text: item.text.toLowerCase().trim()
    });
  });
}
/**
 * set an 'invisible' boolean on tags, if they're in the list above
 * @param {array} items
 * @return {array}
 */


function setInvisible(items) {
  return _map(items || [], function (item) {
    return _set(item, 'invisible', _includes(invisibleTags, item.text));
  });
}

module.exports.save = function (uri, data) {
  var items = data.items;
  items = clean(items); // first, make sure everything is lowercase and has trimmed whitespace

  data.normalizedTags = normalizeTags(items);
  items = setInvisible(items); // then figure out which tags should be invisible

  data.items = items;
  return data;
};
}, {"2":2,"15":15,"16":16,"17":17,"18":18}];
window.modules["title-ingridients.model"] = [function(require,module,exports){'use strict';

var striptags = require(4),
    _require = require(1),
    has = _require.has,
    isFieldEmpty = _require.isFieldEmpty,
    _require2 = require(9),
    render = _require2.render,
    _require3 = require(2),
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
