import assert from 'assert';
import removeClass from '../modules/remove_class';

describe('removeClass', () => {
	it('should throw an error if no params are given', () => {
		assert.throws(() => {
			removeClass();
		});
	});

	it('should return the same set of elements', () => {
		document.body.innerHTML = '<div></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		const newDivs = removeClass.call(divs, 'foo');

		divs.forEach((element, index) => {
			assert(element.isEqualNode(newDivs[index]));
		});
	});

	it('should remove a single css class from the elements', () => {
		document.body.innerHTML = '<div class="foo"></div><div class="foo"></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		removeClass.call(divs, 'foo');

		divs.forEach(div => {
			assert(!div.classList.contains('foo'));
		});
	});

	it('should remove multiple css classes from the elements', () => {
		document.body.innerHTML = '<div class="one two"></div><div class="one two three"></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		removeClass.call(divs, 'one two three');

		divs.forEach(div => {
			assert(!div.classList.contains('one'));
			assert(!div.classList.contains('two'));
			assert(!div.classList.contains('three'));
		});
	});
});
