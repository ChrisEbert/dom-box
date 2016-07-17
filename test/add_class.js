import assert from 'assert';
import addClass from '../modules/add_class';

describe('addClass', () => {
	it('should throw an error if no params are given', () => {
		assert.throws(() => {
			addClass();
		});
	});

	it('should return the same set of elements', () => {
		document.body.innerHTML = '<div></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		const newDivs = addClass.call(divs, 'foo');

		divs.forEach((element, index) => {
			assert(element.isEqualNode(newDivs[index]));
		});
	});

	it('should add a single css class to the elements', () => {
		document.body.innerHTML = '<div></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		addClass.call(divs, 'foo');

		divs.forEach(div => {
			assert(div.classList.contains('foo'));
		});
	});

	it('should add multiple css classes to the elements', () => {
		document.body.innerHTML = '<div></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		addClass.call(divs, 'one two three');

		divs.forEach(div => {
			assert(div.classList.contains('one'));
			assert(div.classList.contains('two'));
			assert(div.classList.contains('three'));
		});
	});
});
