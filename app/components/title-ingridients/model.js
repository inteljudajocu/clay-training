'use strict';

const sanitize = require('../../services/universal/sanitize');

module.exports.save = function(ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));

  return data;
};

const striptags = require('striptags'),
  { has, isFieldEmpty } = require('../../services/universal/utils'),
  { render } = require('../../services/universal/styles'),
  { toSmartText } = require('../../services/universal/sanitize');

module.exports.save = function(uri, data) {
  const allowedTags = ['strong', 'em', 's', 'a', 'span'];

  if (has(data.items)) {
    data.items.forEach(item => {
      item.ingredients = toSmartText(striptags(item.ingredients, allowedTags));
    });
  }

  if (isFieldEmpty(data.sass)) {
    delete data.css;

    return data;
  } else {
    return render(uri, data.sass).then(css => {
      data.css = css;

      return data;
    });
  }
};