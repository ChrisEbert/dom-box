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

[index.js:7-33](https://github.com/ChrisEbert/dom-box/blob/5de62f1d95e2b2b04615bc64566ac6a1f7bde86e/index.js#L7-L33 "Source code on GitHub")

Finds elements in the given scope, filtered by the given selector

**Parameters**

-   `paramSelector` **(selector | [element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** The elements to find
-   `paramScope` **\[(selector | [element](https://developer.mozilla.org/en-US/docs/Web/API/Element))]** The scope to search for the elements (optional, default `document`)

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** A set of elements

### addClass

[modules/add_class.js:14-22](https://github.com/ChrisEbert/dom-box/blob/5de62f1d95e2b2b04615bc64566ac6a1f7bde86e/modules/add_class.js#L14-L22 "Source code on GitHub")

Adds one or more classes to each of the selected elements.

**Parameters**

-   `cssClass` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** One or more space separted classes.

**Examples**

```javascript
$('div', addClass('foo'));

$('div', addClass('foo bar'));
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The selected elements.

## License

MIT © [Chris Ebert](https://github.com/ChrisEbert)
