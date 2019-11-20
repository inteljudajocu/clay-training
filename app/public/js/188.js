window.modules["188"] = [function(require,module,exports){var DomUtils = module.exports;

[
	require(194),
	require(191),
	require(193),
	require(190),
	require(189),
	require(192)
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});
}, {"189":189,"190":190,"191":191,"192":192,"193":193,"194":194}];
