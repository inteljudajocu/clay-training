window.modules["213"] = [function(require,module,exports){/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/

'use strict';

function s(value) {
  /* jshint validthis: true */
  if (!(this instanceof s)) return new s(value);
  this._wrapped = value;
}

s.VERSION = '3.3.4';

s.isBlank          = require(641);
s.stripTags        = require(626);
s.capitalize       = require(585);
s.decapitalize     = require(584);
s.chop             = require(588);
s.trim             = require(583);
s.clean            = require(590);
s.cleanDiacritics  = require(591);
s.count            = require(592);
s.chars            = require(587);
s.swapCase         = require(627);
s.escapeHTML       = require(597);
s.unescapeHTML     = require(642);
s.splice           = require(614);
s.insert           = require(615);
s.replaceAll       = require(628);
s.include          = require(607);
s.join             = require(629);
s.lines            = require(608);
s.dedent           = require(594);
s.reverse          = require(616);
s.startsWith       = require(643);
s.endsWith         = require(595);
s.pred             = require(647);
s.succ             = require(648);
s.titleize         = require(630);
s.camelize         = require(582);
s.underscored      = require(606);
s.dasherize        = require(593);
s.classify         = require(589);
s.humanize         = require(605);
s.ltrim            = require(645);
s.rtrim            = require(646);
s.truncate         = require(631);
s.prune            = require(632);
s.words            = require(617);
s.pad              = require(644);
s.lpad             = require(619);
s.rpad             = require(618);
s.lrpad            = require(620);
s.sprintf          = require(650);
s.vsprintf         = require(649);
s.toNumber         = require(609);
s.numberFormat     = require(610);
s.strRight         = require(634);
s.strRightBack     = require(635);
s.strLeft          = require(633);
s.strLeftBack      = require(636);
s.toSentence       = require(621);
s.toSentenceSerial = require(622);
s.slugify          = require(624);
s.surround         = require(611);
s.quote            = require(623);
s.unquote          = require(612);
s.repeat           = require(637);
s.naturalCmp       = require(613);
s.levenshtein      = require(639);
s.toBoolean        = require(625);
s.exports          = require(599);
s.escapeRegExp     = require(602);
s.wrap             = require(638);
s.map              = require(640);

// Aliases
s.strip     = s.trim;
s.lstrip    = s.ltrim;
s.rstrip    = s.rtrim;
s.center    = s.lrpad;
s.rjust     = s.lpad;
s.ljust     = s.rpad;
s.contains  = s.include;
s.q         = s.quote;
s.toBool    = s.toBoolean;
s.camelcase = s.camelize;
s.mapChars  = s.map;


// Implement chaining
s.prototype = {
  value: function value() {
    return this._wrapped;
  }
};

function fn2method(key, fn) {
  if (typeof fn !== 'function') return;
  s.prototype[key] = function() {
    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
    var res = fn.apply(null, args);
    // if the result is non-string stop the chain and return the value
    return typeof res === 'string' ? new s(res) : res;
  };
}

// Copy functions to instance methods for chaining
for (var key in s) fn2method(key, s[key]);

fn2method('tap', function tap(string, fn) {
  return fn(string);
});

function prototype2method(methodName) {
  fn2method(methodName, function(context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return String.prototype[methodName].apply(context, args);
  });
}

var prototypeMethods = [
  'toUpperCase',
  'toLowerCase',
  'split',
  'replace',
  'slice',
  'substring',
  'substr',
  'concat'
];

for (var method in prototypeMethods) prototype2method(prototypeMethods[method]);


module.exports = s;
}, {"582":582,"583":583,"584":584,"585":585,"587":587,"588":588,"589":589,"590":590,"591":591,"592":592,"593":593,"594":594,"595":595,"597":597,"599":599,"602":602,"605":605,"606":606,"607":607,"608":608,"609":609,"610":610,"611":611,"612":612,"613":613,"614":614,"615":615,"616":616,"617":617,"618":618,"619":619,"620":620,"621":621,"622":622,"623":623,"624":624,"625":625,"626":626,"627":627,"628":628,"629":629,"630":630,"631":631,"632":632,"633":633,"634":634,"635":635,"636":636,"637":637,"638":638,"639":639,"640":640,"641":641,"642":642,"643":643,"644":644,"645":645,"646":646,"647":647,"648":648,"649":649,"650":650}];
