'use strict';

const rest = require('./../universal/rest');

function search(index, query) {
  return rest.post('localhost/_search', {
    index,
    body: query
  });
}

module.exports.search = search;
