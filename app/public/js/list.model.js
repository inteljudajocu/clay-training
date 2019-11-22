window.modules["list.model"] = [function(require,module,exports){'use strict';

var striptags = require(4),
    _require = require(2),
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
}, {"1":1,"2":2,"4":4,"9":9}];
