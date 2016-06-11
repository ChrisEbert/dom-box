# dom-box [![Build Status](https://travis-ci.org/ChrisEbert/dom-box.svg?branch=master)](https://travis-ci.org/ChrisEbert/dom-box)

> You like jQuery syntax and ES2015 features?

Dom-box is a neat wrapper around DOM APIs with jQuery like syntax. It is designed to fit only your needs. Import just what your app deserves.

## Install

```
$ npm install --save dombox
```


## Usage

```js
import $ from 'dom-box';
import {addClass} from 'dom-box/modules/add_class';

$('.msg', addClass('open'));
```


## Modules

* addClass
* find
* first
* ...

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

## License

MIT © [Chris Ebert](https://github.com/ChrisEbert)
