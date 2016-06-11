import assert from 'assert';
import jsdom from 'mocha-jsdom';
import $, {fetchElements} from '../index';

describe('fetchElements', () => {
	jsdom();

	it('should return an empty array if no elements were found', () => {
		const selector = fetchElements('.foo');
		assert(Array.isArray(selector));
		assert.equal(selector.length, 0);

		const scope = fetchElements('.foo', '#bar');
		assert(Array.isArray(scope));
		assert.equal(scope.length, 0);

		const bullshit = fetchElements(true);
		assert(Array.isArray(bullshit));
		assert.equal(bullshit.length, 0);
	});

	it('should find the elements by selector', () => {
		document.body.innerHTML = `
			<h1></h1>
			<div id="element"></div>
			<span class="elements"></span><span class="elements"></span>
		`;

		const tag = fetchElements('h1');
		const id = fetchElements('#element');
		const cssClass = fetchElements('.elements');

		assert.equal(tag.length, 1);
		assert.equal(id.length, 1);
		assert.equal(cssClass.length, 2);
	});

	it('should find a elements in a specific scope', () => {
		document.body.innerHTML = `
			<div id="scope" class="scope">
				<span></span>
			</div>
			<div class="scope">
				<span></span>
			</div>
		`;

		const idScope = fetchElements('span', '#scope');
		const classScope = fetchElements('span', '.scope');

		assert.equal(idScope.length, 1);
		assert.equal(classScope.length, 2);
	});

	it('should forward already fetched elements', () => {
		document.body.innerHTML = `
			<div></div><div></div>
		`;

		const elements = fetchElements('div');
		const sameElements = fetchElements(elements);

		const vanillaSingle = document.querySelector('div');
		const vanillaAll = document.querySelectorAll('div');

		assert.deepEqual(sameElements, elements);
		assert.deepEqual(fetchElements(vanillaSingle)[0], vanillaSingle);
		assert.deepEqual(fetchElements(vanillaAll), Array.from(vanillaAll));
	});

	it('should search for elements in an already fetched scope', () => {
		document.body.innerHTML = `
			<div><span></span></div><div><span></span></div>
		`;

		const scopes = $('div');
		const children = $('span', scopes);

		assert.equal(children.length, 2);
	});
});

describe('$', () => {
	jsdom();

	it('should return an array', () => {
		assert.deepEqual($(), []);
	});
});
