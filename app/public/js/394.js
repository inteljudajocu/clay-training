window.modules["394"] = [function(require,module,exports){var csstree = require(58);
var parse = csstree.parse;
var compress = require(406);
var translate = csstree.translate;
var translateWithSourceMap = csstree.translateWithSourceMap;

function debugOutput(name, options, startTime, data) {
    if (options.debug) {
        console.error('## ' + name + ' done in %d ms\n', Date.now() - startTime);
    }

    return data;
}

function createDefaultLogger(level) {
    var lastDebug;

    return function logger(title, ast) {
        var line = title;

        if (ast) {
            line = '[' + ((Date.now() - lastDebug) / 1000).toFixed(3) + 's] ' + line;
        }

        if (level > 1 && ast) {
            var css = translate(ast, true);

            // when level 2, limit css to 256 symbols
            if (level === 2 && css.length > 256) {
                css = css.substr(0, 256) + '...';
            }

            line += '\n  ' + css + '\n';
        }

        console.error(line);
        lastDebug = Date.now();
    };
}

function copy(obj) {
    var result = {};

    for (var key in obj) {
        result[key] = obj[key];
    }

    return result;
}

function buildCompressOptions(options) {
    options = copy(options);

    if (typeof options.logger !== 'function' && options.debug) {
        options.logger = createDefaultLogger(options.debug);
    }

    return options;
}

function runHandler(ast, options, handlers) {
    if (!Array.isArray(handlers)) {
        handlers = [handlers];
    }

    handlers.forEach(function(fn) {
        fn(ast, options);
    });
}

function minify(context, source, options) {
    options = options || {};

    var filename = options.filename || '<unknown>';
    var result;

    // parse
    var ast = debugOutput('parsing', options, Date.now(),
        parse(source, {
            context: context,
            filename: filename,
            positions: Boolean(options.sourceMap)
        })
    );

    // before compress handlers
    if (options.beforeCompress) {
        debugOutput('beforeCompress', options, Date.now(),
            runHandler(ast, options, options.beforeCompress)
        );
    }

    // compress
    var compressResult = debugOutput('compress', options, Date.now(),
        compress(ast, buildCompressOptions(options))
    );

    // after compress handlers
    if (options.afterCompress) {
        debugOutput('afterCompress', options, Date.now(),
            runHandler(compressResult, options, options.afterCompress)
        );
    }

    // translate
    if (options.sourceMap) {
        result = debugOutput('translateWithSourceMap', options, Date.now(), (function() {
            var tmp = translateWithSourceMap(compressResult.ast);
            tmp.map._file = filename; // since other tools can relay on file in source map transform chain
            tmp.map.setSourceContent(filename, source);
            return tmp;
        })());
    } else {
        result = debugOutput('translate', options, Date.now(), {
            css: translate(compressResult.ast),
            map: null
        });
    }

    return result;
}

function minifyStylesheet(source, options) {
    return minify('stylesheet', source, options);
}

function minifyBlock(source, options) {
    return minify('declarationList', source, options);
}

module.exports = {
    version: require(410).version,

    // main methods
    minify: minifyStylesheet,
    minifyBlock: minifyBlock,

    // compress an AST
    compress: compress,

    // css syntax parser/walkers/generator/etc
    syntax: csstree
};
}, {"58":58,"406":406,"410":410}];
