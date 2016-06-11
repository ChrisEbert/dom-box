(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _add_class = require('../modules/add_class');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

on
off
removeClass
hasClass
last
index
prev
next
prevAll
nextAll
replaceWith
wrap
html
text
val
prop
attr
bind (observer)
remove
append
data
show
hide

*/

(0, _index2.default)('#scope', (0, _add_class.addClass)('open'));

},{"../index":2,"../modules/add_class":4}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _add_class = require('./modules/add_class');

Object.defineProperty(exports, 'addClass', {
	enumerable: true,
	get: function get() {
		return _add_class.addClass;
	}
});

var _first = require('./modules/first');

Object.defineProperty(exports, 'first', {
	enumerable: true,
	get: function get() {
		return _first.first;
	}
});

var _find = require('./modules/find');

Object.defineProperty(exports, 'find', {
	enumerable: true,
	get: function get() {
		return _find.find;
	}
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fetchElements = exports.fetchElements = function fetchElements(paramSelector) {
	var paramScope = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

	var result = [];
	var scopes = Array.isArray(paramScope) ? [].concat(_toConsumableArray(paramScope)) : [paramScope];

	if (typeof paramScope === 'string') {
		scopes = Array.from(document.querySelectorAll(paramScope));
	}

	if (scopes.length > 0 && typeof paramSelector === 'string') {
		// selector
		scopes.forEach(function (scope) {
			result.push.apply(result, _toConsumableArray(Array.from(scope.querySelectorAll(paramSelector))));
		});
	} else if (Array.isArray(paramSelector) === true) {
		// dombox set - elements already fetched
		result.push.apply(result, _toConsumableArray(paramSelector));
	} else if ((typeof paramSelector === 'undefined' ? 'undefined' : _typeof(paramSelector)) === 'object') {
		// dom node
		if (paramSelector.length > 0) {
			result.push.apply(result, _toConsumableArray(paramSelector));
		} else {
			result.push(paramSelector);
		}
	}

	return result;
};

var $ = exports.$ = function domBox(paramSelector) {
	var paramScope = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

	var modifiers = [];
	var scope = paramScope;

	for (var _len = arguments.length, paramModifiers = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		paramModifiers[_key - 2] = arguments[_key];
	}

	if ((typeof paramScope === 'undefined' ? 'undefined' : _typeof(paramScope)) === 'object' && paramScope.hasOwnProperty('mod') === true) {
		modifiers.push.apply(modifiers, [paramScope].concat(paramModifiers));
		scope = document;
	}

	if (paramModifiers.length > 0) {
		modifiers.push.apply(modifiers, paramModifiers);
	}

	var result = fetchElements(paramSelector, scope);

	modifiers.forEach(function (modifier) {
		var _modifier$mod;

		result = (_modifier$mod = modifier.mod).call.apply(_modifier$mod, [result].concat(_toConsumableArray(modifier.args)));
	});

	return result;
};

exports.default = $;

},{"./modules/add_class":4,"./modules/find":5,"./modules/first":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var wizard = function wizard(mod) {
	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return {
			mod: mod,
			args: args
		};
	};
};

exports.default = wizard;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addClass = undefined;

var _mod_wizard = require('../mod_wizard');

var _mod_wizard2 = _interopRequireDefault(_mod_wizard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mod = function addClass(cssClass) {
	var cssClasses = cssClass.split(' ');

	this.forEach(function (element) {
		var _element$classList;

		(_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(cssClasses));
	});

	return this;
};

exports.default = mod;
var addClass = exports.addClass = (0, _mod_wizard2.default)(mod);

},{"../mod_wizard":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.find = undefined;

var _mod_wizard = require('../mod_wizard');

var _mod_wizard2 = _interopRequireDefault(_mod_wizard);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mod = function find(selector) {
	var newElements = [];

	this.forEach(function (element) {
		newElements.push.apply(newElements, _toConsumableArray((0, _index.fetchElements)(selector, element)));
	});

	return newElements;
};

exports.default = mod;
var find = exports.find = (0, _mod_wizard2.default)(mod);

},{"../index":2,"../mod_wizard":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.first = undefined;

var _mod_wizard = require('../mod_wizard');

var _mod_wizard2 = _interopRequireDefault(_mod_wizard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod = function first() {
	return this.slice(0, 1);
};

exports.default = mod;
var first = exports.first = (0, _mod_wizard2.default)(mod);

},{"../mod_wizard":3}]},{},[1]);
