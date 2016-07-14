# dom-box [![Build Status](https://travis-ci.org/ChrisEbert/dom-box.svg?branch=master)](https://travis-ci.org/ChrisEbert/dom-box)

> You like jQuery syntax and ES2015 features?

Dom-box is a neat wrapper around DOM APIs with jQuery like syntax. It is designed to fit only your needs. Import just what your app deserves.

## Install (coming soon)

    $ npm install --save dombox

## Usage

```js
import $ from 'dom-box';
import {addClass} from 'dom-box/modules/add_class';

$('.msg', addClass('open'));
```

## Create your own modules

```js
import $ from 'dom-box';
import wizard from 'dom-box/mod_wizard';

const findTheMightyElements = wizard(function findTheMightyElements() {

	const newElements = this.filter(element => {
		return element.tagName === 'MIGHTY';
	});

	return newElements;
});

/*
	<div></div>
	<mighty></mighty>
	<section></section>
*/

$('*', findTheMightyElements()); // [mighty]
```

## API

### fetchElements

[index.js:7-33](https://github.com/ChrisEbert/dom-box/blob/2faf33d8c0e6502dc6175c23d4050d91abdfd0da/index.js#L7-L33 "Source code on GitHub")

Finds elements in the given scope, filtered by the given selector

**Parameters**

-   `paramSelector` **(selector | [element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** The elements to find
-   `paramScope` **\[(selector | [element](https://developer.mozilla.org/en-US/docs/Web/API/Element))]** The scope to search for the elements (optional, default `document`)

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** A set of elements

### addClass

[modules/add_class.js:13-21](https://github.com/ChrisEbert/dom-box/blob/2faf33d8c0e6502dc6175c23d4050d91abdfd0da/modules/add_class.js#L13-L21 "Source code on GitHub")

Adds one or more classes to each of the selected elements.

**Parameters**

-   `cssClass` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** One or more space separted classes.

**Examples**

```javascript
$('div', addClass('foo'));
$('div', addClass('foo bar'));
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The selected elements.

### val

[modules/val.js:16-27](https://github.com/ChrisEbert/dom-box/blob/2faf33d8c0e6502dc6175c23d4050d91abdfd0da/modules/val.js#L16-L27 "Source code on GitHub")

Get the value of the first element or set the value of each element.

**Parameters**

-   `value` **\[([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))]** The functions works as setter if this parameter is given.

**Examples**

```javascript
// <input type="text" value="foo" />
$('input', val()); // foo
$('input', val('bar')); // <input type="text" value="bar" />
```

Returns **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** The current set of matched elements if the function
                       works as setter, or the value of the first element if
                       the function works as getter.

## License

MIT © [Chris Ebert](https://github.com/ChrisEbert)
