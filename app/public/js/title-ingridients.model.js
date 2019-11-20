window.modules["title-ingridients.model"] = [function(require,module,exports){'use strict';

var striptags = require(3),
    _require = require(5),
    has = _require.has,
    isFieldEmpty = _require.isFieldEmpty,
    _require2 = require(9),
    render = _require2.render,
    _require3 = require(4),
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
}, {"3":3,"4":4,"5":5,"9":9}];
