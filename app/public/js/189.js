window.modules["189"] = [function(require,module,exports){var DomUtils = module.exports;

[
	require(195),
	require(193),
	require(194),
	require(191),
	require(192),
	require(190)
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});
}, {"190":190,"191":191,"192":192,"193":193,"194":194,"195":195}];
