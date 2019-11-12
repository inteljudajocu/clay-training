'use strict';

const clayUtils = require('clayutils');
const h = require('highland'),
  { subscribe, helpers } = require('amphora-search');

subscribe('save').through(handleSave);

function handleSave(stream) {
  return stream.each(handleStreams);
}

function handleStreams(stream) {
  return stream
    .filter(filterStreams)
    .map(helpers.parseOpValue)
    .each(console.log);
}

function filterStreams(op) {
  return op.key.indexOf('_components/recipe/') !== -1;
}
