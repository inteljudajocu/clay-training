'use strict';

const { search } = require('../../services/server/elastic'),
  query = {
    size: 5,
    sort: [
      {
        date: 'desc'
      }
    ],
    query: {
      match_all: {}
    }
  };

module.exports.render = function(uri, data) {
  return search('local_recipes', query)
    .then(({ hits }) => hits.hits)
    .then(hits => hits.map(({ _source }) => _source))
    .then(res => {
      data.recipes = res;

      return data;
    });
};
