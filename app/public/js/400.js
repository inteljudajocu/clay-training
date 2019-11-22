window.modules["400"] = [function(require,module,exports){module.exports = function cleanDeclartion(node, item, list) {
    if (node.value.children && node.value.children.isEmpty()) {
        list.remove(item);
    }
};
}, {}];
