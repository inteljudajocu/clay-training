window.modules["kiln_index.kilnplugin"] = [function(require,module,exports){'use strict';

var props = ['inputs', 'modals', 'plugins', 'toolbarButtons', 'validators', 'transformers'];

module.exports = function () {
  window.kiln = window.kiln || {}; // create global kiln if it doesn't exist

  window.kiln.helpers = require(646);
  props.forEach(function (prop) {
    // create global properties if they don't exist
    window.kiln[prop] = window.kiln[prop] || {};
  });

  require("plugins_word-count.kilnplugin")();
};
}, {"646":646,"plugins_word-count.kilnplugin":"plugins_word-count.kilnplugin"}];
window.modules["plugins_word-count.kilnplugin"] = [function(require,module,exports){'use strict';

var wordCount = require(647);
/**
 * update word count element after vue's current tick
 * @param  {number} count
 */


function updateWordCount(count) {
  window.setTimeout(function () {
    var wordCountEl = document.querySelector('.word-count');

    if (wordCountEl) {
      wordCountEl.innerHTML = 'Words: ' + count;
    }
  }, 0);
}

module.exports = function () {
  window.kiln.plugins['word-count'] = function (store) {
    // update word count whenever a paragraph, blockquote, article, etc is re-rendered
    store.subscribe(function (mutation, state) {
      var uri = mutation.payload && mutation.payload.uri;

      if (mutation.type === 'PRELOAD_SUCCESS' || mutation.type === 'RENDER_COMPONENT' && wordCount.isComponentWithWords(uri)) {
        updateWordCount(wordCount.count(state.components));
      }
    });
  };
};
}, {"647":647}];
