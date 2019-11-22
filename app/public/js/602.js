window.modules["602"] = [function(require,module,exports){var makeString = require(586);

module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
}, {"586":586}];
