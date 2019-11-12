window.modules["592"] = [function(require,module,exports){var makeString = require(576);

module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
}, {"576":576}];
