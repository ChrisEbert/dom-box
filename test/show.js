import assert from 'assert';
import show from '../modules/show';
import {equalElements} from './_helper';

describe('show', () => {
	it('should return the same set of elements', () => {
		document.body.innerHTML = '<div></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		const newDivs = show.call(divs);

		equalElements(divs, newDivs);
	});

	it('should set the display property to block', () => {
		document.body.innerHTML = '<div></div>';

		const div = Array.from(document.querySelectorAll('div'));
		show.call(div);

		assert.equal(div.style.display, 'block');
	});
});
