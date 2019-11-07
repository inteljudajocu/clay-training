window.modules["meta-title.model"] = [function(require,module,exports){'use strict';

var sanitize = require(14);

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
}, {"14":14}];
