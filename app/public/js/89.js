window.modules["89"] = [function(require,module,exports){var List = require(53);
var Tokenizer = require(74);
var Lexer = require(59);
var grammar = require(72);
var createParser = require(73);
var createGenerator = require(54);
var createConvertor = require(52);
var createWalker = require(90);
var clone = require(91);
var names = require(61);
var mix = require(84);

function assign(dest, src) {
    for (var key in src) {
        dest[key] = src[key];
    }

    return dest;
}

function createSyntax(config) {
    var parse = createParser(config);
    var walker = createWalker(config);
    var generator = createGenerator(config);
    var convertor = createConvertor(walker);

    var syntax = {
        List: List,
        Tokenizer: Tokenizer,
        Lexer: Lexer,

        property: names.property,
        keyword: names.keyword,

        grammar: grammar,
        lexer: null,
        createLexer: function(config) {
            return new Lexer(config, syntax, syntax.lexer.structure);
        },

        parse: parse,

        walk: walker.walk,
        walkUp: walker.walkUp,
        walkRules: walker.walkRules,
        walkRulesRight: walker.walkRulesRight,
        walkDeclarations: walker.walkDeclarations,

        translate: generator.translate,
        translateWithSourceMap: generator.translateWithSourceMap,
        translateMarkup: generator.translateMarkup,

        clone: clone,
        fromPlainObject: convertor.fromPlainObject,
        toPlainObject: convertor.toPlainObject,

        createSyntax: function(config) {
            return createSyntax(mix({}, config));
        },
        fork: function(extension) {
            var base = mix({}, config); // copy of config
            return createSyntax(
                typeof extension === 'function'
                    ? extension(base, assign)
                    : mix(base, extension)
            );
        }
    };

    syntax.lexer = new Lexer({
        generic: true,
        types: config.types,
        properties: config.properties,
        node: config.node
    }, syntax);

    return syntax;
};

exports.create = function(config) {
    return createSyntax(mix({}, config));
};
}, {"52":52,"53":53,"54":54,"59":59,"61":61,"72":72,"73":73,"74":74,"84":84,"90":90,"91":91}];
