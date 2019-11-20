'use strict';

const h = require('highland'),
  { subscribe, helpers } = require('amphora-search'),
  {
    urlToUri,
    getIndexFromFilename,
    put,
    del,
    createFilter,
    getMainComponentRef,
    uriToPublished,
    getComponentByName,
    getComponentContent
  } = require('../utils'),
  index = helpers.indexWithPrefix(getIndexFromFilename(__filename)),
  filter = createFilter({
    components: ['explore', 'recipe', 'article'],
    includePage: true
  }),
  log = require('../../services/universal/log').setup({ file: __filename });

subscribe('save').through(handleSave);
subscribe('unpublishPage').through(handleUnpublish);

function handleSave(stream) {
  return stream
    .map(handleStreams)
    .merge()
    .map(putToElastic)
    .errors(logErrors)
    .each(logSucces);
}

function handleUnpublish(stream) {
  return stream
    .tap(console.log)
    .map(handleStreamUnpublish)
    .errors(logErrors)
    .each(logSucces);
}

function handleStreamUnpublish(op) {
  return del(index, uriToPublished(op.uri));
}

function logSucces(res) {
  log('info', res);
}

function logErrors(errors) {
  log('error', errors);
}

function handleStreams(stream) {
  return stream
    .filter(filter)
    .map(helpers.parseOpValue)
    .collect()
    .map(parseComponent);
}

function putToElastic(obj) {
  return put(index, urlToUri(obj.ref), obj.source);
}

function parseComponent(ops) {
  const mainComponent = getMainComponentRef(ops),
    { canonicalUrl } = mainComponent.value,
    { title, reviews, imageUrl } = getComponentByName(ops, 'recipe').value;

  return {
    key: mainComponent.key,
    source: {
      url: canonicalUrl,
      title,
      reviews,
      imageUrl
    }
  };
}
