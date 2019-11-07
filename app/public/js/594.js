window.modules["594"] = [function(require,module,exports){var makeString = require(578);

module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
}, {"578":578}];
