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

s.isBlank          = require(632);
s.stripTags        = require(616);
s.capitalize       = require(575);
s.decapitalize     = require(574);
s.chop             = require(578);
s.trim             = require(573);
s.clean            = require(580);
s.cleanDiacritics  = require(581);
s.count            = require(582);
s.chars            = require(577);
s.swapCase         = require(617);
s.escapeHTML       = require(587);
s.unescapeHTML     = require(633);
s.splice           = require(604);
s.insert           = require(605);
s.replaceAll       = require(618);
s.include          = require(597);
s.join             = require(619);
s.lines            = require(598);
s.dedent           = require(584);
s.reverse          = require(606);
s.startsWith       = require(634);
s.endsWith         = require(585);
s.pred             = require(636);
s.succ             = require(637);
s.titleize         = require(620);
s.camelize         = require(572);
s.underscored      = require(596);
s.dasherize        = require(583);
s.classify         = require(579);
s.humanize         = require(595);
s.ltrim            = require(638);
s.rtrim            = require(621);
s.truncate         = require(622);
s.prune            = require(623);
s.words            = require(607);
s.pad              = require(635);
s.lpad             = require(608);
s.rpad             = require(609);
s.lrpad            = require(610);
s.sprintf          = require(639);
s.vsprintf         = require(640);
s.toNumber         = require(600);
s.numberFormat     = require(599);
s.strRight         = require(624);
s.strRightBack     = require(625);
s.strLeft          = require(626);
s.strLeftBack      = require(627);
s.toSentence       = require(613);
s.toSentenceSerial = require(612);
s.slugify          = require(611);
s.surround         = require(601);
s.quote            = require(614);
s.unquote          = require(602);
s.repeat           = require(629);
s.naturalCmp       = require(603);
s.levenshtein      = require(628);
s.toBoolean        = require(615);
s.exports          = require(589);
s.escapeRegExp     = require(592);
s.wrap             = require(631);
s.map              = require(630);

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
}, {"572":572,"573":573,"574":574,"575":575,"577":577,"578":578,"579":579,"580":580,"581":581,"582":582,"583":583,"584":584,"585":585,"587":587,"589":589,"592":592,"595":595,"596":596,"597":597,"598":598,"599":599,"600":600,"601":601,"602":602,"603":603,"604":604,"605":605,"606":606,"607":607,"608":608,"609":609,"610":610,"611":611,"612":612,"613":613,"614":614,"615":615,"616":616,"617":617,"618":618,"619":619,"620":620,"621":621,"622":622,"623":623,"624":624,"625":625,"626":626,"627":627,"628":628,"629":629,"630":630,"631":631,"632":632,"633":633,"634":634,"635":635,"636":636,"637":637,"638":638,"639":639,"640":640}];
