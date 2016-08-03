# dom-box [![Build Status](https://travis-ci.org/ChrisEbert/dom-box.svg?branch=master)](https://travis-ci.org/ChrisEbert/dom-box) [![Dependency Status](https://dependencyci.com/github/ChrisEbert/dom-box/badge)](https://dependencyci.com/github/ChrisEbert/dom-box) [![Coverage Status](https://coveralls.io/repos/github/ChrisEbert/dom-box/badge.svg?branch=master)](https://coveralls.io/github/ChrisEbert/dom-box?branch=master)

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

## Todo

-   on
-   off
-   index
-   prev
-   next
-   prevAll
-   nextAll
-   replaceWith
-   wrap
-   html
-   text
-   val
-   prop
-   attr
-   bind (observer)
-   remove
-   append
-   data

## API

### fetchElements

[index.js:7-33](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/index.js#L7-L33 "Source code on GitHub")

Finds elements in the given scope, filtered by the given selector

**Parameters**

-   `paramSelector` **(selector | [element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** The elements to find
-   `paramScope` **\[(selector | [element](https://developer.mozilla.org/en-US/docs/Web/API/Element))]** The scope to search for the elements (optional, default `document`)

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** A set of elements

### addClass

[modules/add_class.js:13-21](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/add_class.js#L13-L21 "Source code on GitHub")

Adds one or more classes to each of the selected elements.

**Parameters**

-   `cssClass` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** One or more space separted classes.

**Examples**

```javascript
$('div', addClass('foo'));
$('div', addClass('foo bar'));
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The selected elements.

### removeClass

[modules/remove_class.js:13-21](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/remove_class.js#L13-L21 "Source code on GitHub")

Removes one or more classes from each of the selected elements.

**Parameters**

-   `cssClass` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** One or more space separted classes.

**Examples**

```javascript
$('div', removeClass('foo'));
$('div', removeClass('foo bar'));
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The selected elements.

### hasClass

[modules/has_class.js:13-19](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/has_class.js#L13-L19 "Source code on GitHub")

Checks if at least one element in the current set contains the given class or classes.

**Parameters**

-   `cssClass` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** One or more space separted classes.

**Examples**

```javascript
$('div', addClass('foo'));
$('div', addClass('foo bar'));
```

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns true if there is a match.

### first

[modules/first.js:17-19](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/first.js#L17-L19 "Source code on GitHub")

Reduces the current set to the first element in the set.

**Examples**

```javascript
//<ul>
// <li class="first"></li>
// <li></li>
//	<li></li>
//</ul>

$('li', 'ul', first()); // ['li.first']
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The first element.

### last

[modules/last.js:17-19](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/last.js#L17-L19 "Source code on GitHub")

Reduces the current set to the last element in the set.

**Examples**

```javascript
//<ul>
// <li></li>
// <li></li>
//	<li class="last"></li>
//</ul>

$('li', 'ul', last()); // ['li.last']
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The last element.

### find

[modules/find.js:17-25](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/find.js#L17-L25 "Source code on GitHub")

Finds the descendants in the current set, filtered by the given selector.

**Parameters**

-   `selector` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** A selector expression.

**Examples**

```javascript
//<article>
//	<section></section>
//	<section></section>
//</article>
$('article', find('section')) // ['section', 'section']
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** A set of fetched elements.

### val

[modules/val.js:16-26](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/val.js#L16-L26 "Source code on GitHub")

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
                       is used as setter, or the value of the first element if
                       the function is used as getter.

### show

[modules/show.js:11-17](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/show.js#L11-L17 "Source code on GitHub")

Display the selected elements.

**Examples**

```javascript
$('div', show());
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The selected elements.

### hide

[modules/hide.js:11-17](https://github.com/ChrisEbert/dom-box/blob/4f95be8143ce5fa513c3daf1509315d6cd21d236/modules/hide.js#L11-L17 "Source code on GitHub")

Hide the selected elements.

**Examples**

```javascript
$('div', hide());
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The selected elements.

## License

MIT © [Chris Ebert](https://github.com/ChrisEbert)
