window.modules["meta-authors.model"] = [function(require,module,exports){'use strict';

var _get = require(15);

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
}, {"15":15}];
