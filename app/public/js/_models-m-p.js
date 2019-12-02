window.modules["meta-authors.model"] = [function(require,module,exports){'use strict';

var _get = require(2);

module.exports.save = function (ref, data) {
  data.authors = data.authors || []; // Normalize "authors" value; if saved from a Kiln form, it will be of the form
  // [{text: string}].

  data.authors = data.authors.map(function (author) {
    return typeof author === 'string' ? author : _get(author, 'text', '');
  });
  return data;
};

module.exports.render = function (ref, data) {
  // Transforms "authors" value into form [{text: string}] so it can be edited in
  // simple-list Kiln field.
  data.authors = data.authors.map(function (author) {
    return {
      text: author
    };
  });
  return data;
};
}, {"2":2}];
window.modules["meta-keywords.model"] = [function(require,module,exports){'use strict';

var _isEmpty = require(14),
    _isObject = require(12),
    _head = require(13);

module.exports.save = function (ref, data) {
  // convert array of {text: string} objects into regular array of strings
  if (!_isEmpty(data.tags) && _isObject(_head(data.tags))) {
    data.tags = data.tags.map(function (tag) {
      return tag.text;
    });
  }

  return data;
};
}, {"12":12,"13":13,"14":14}];
window.modules["meta-title.model"] = [function(require,module,exports){'use strict';

var sanitize = require(1);

module.exports.save = function (ref, data) {
  data = sanitize.recursivelyStripSeperators(data);

  if (!data.kilnTitle) {
    data.kilnTitle = data.title;
  } else if (!data.title && data.kilnTitle) {
    // If the pagelist has title, but metatag is empty
    data.title = data.kilnTitle;
  }

  return data;
};
}, {"1":1}];
window.modules["meta-url.model"] = [function(require,module,exports){'use strict';
/**
 * set component canonical url and date if they're passed in through the locals
 * @param {object} data
 * @param {object} [locals]
 */

function setFromLocals(data, locals) {
  if (locals && locals.publishUrl) {
    data.url = locals.publishUrl;
  }

  if (locals && locals.date) {
    data.date = locals.date;
  }
}

module.exports.save = function (ref, data, locals) {
  setFromLocals(data, locals);
  return data;
};
}, {}];
window.modules["paragraph.model"] = [function(require,module,exports){'use strict';

var sanitize = require(1);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  return data;
};
}, {"1":1}];
