import assert from 'assert';
import hasClass from '../modules/has_class';

describe('hasClass', () => {
	it('should throw an error if no params are given', () => {
		assert.throws(() => {
			hasClass();
		});
	});

	it('should return true if at least one element has the given class', () => {
		document.body.innerHTML = '<div class="foo"></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		assert(hasClass.call(divs, 'foo'));
	});

	it('should return false if no element has the given class', () => {
		document.body.innerHTML = '<div></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		assert(!hasClass.call(divs, 'foo'));
	});
});
