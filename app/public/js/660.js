window.modules["660"] = [function(require,module,exports){'use strict';

var _includes = require(16);

function isVideo(contentData) {
  return contentData.featureTypes && (contentData.featureTypes['Video-Original'] || contentData.featureTypes['Video-Aggregation'] || contentData.featureTypes['Video-Original News']);
}

function isGallery(contentData) {
  return contentData.tags && _includes(contentData.tags, 'gallery');
}

function getCalloutType(contentData) {
  if (isVideo(contentData)) {
    return 'video';
  }

  if (isGallery(contentData)) {
    return 'gallery';
  }

  return '';
}

module.exports = getCalloutType;
}, {"16":16}];
