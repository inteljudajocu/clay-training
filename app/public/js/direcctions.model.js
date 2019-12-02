window.modules["direcctions.model"] = [function(require,module,exports){'use strict';

var striptags = require(6),
    _require = require(2),
    has = _require.has,
    isFieldEmpty = _require.isFieldEmpty,
    _require2 = require(9),
    render = _require2.render,
    _require3 = require(1),
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
}, {"1":1,"2":2,"6":6,"9":9}];
