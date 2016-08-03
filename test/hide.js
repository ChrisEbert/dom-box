import assert from 'assert';
import hide from '../modules/hide';
import {equalElements} from './_helper';

describe('hide', () => {
	it('should return the same set of elements', () => {
		document.body.innerHTML = '<div></div><div></div>';

		const divs = Array.from(document.querySelectorAll('div'));

		const newDivs = hide.call(divs);

		equalElements(divs, newDivs);
	});

	it('should set the display property to none', () => {
		document.body.innerHTML = '<div style="display: block"></div>';

		const div = document.querySelector('div');
		hide.call(div);

		assert.equal(div.style.display, 'none');
	});
});
