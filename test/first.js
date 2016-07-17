import assert from 'assert';
import first from '../modules/first';

describe('first', () => {
	it('should return the first element', () => {
		document.body.innerHTML = '<div id="first"></div><div></div>';
		const divs = Array.from(document.querySelectorAll('div'));
		const firstDiv = first.call(divs);

		assert.equal(firstDiv.length, 1);
		assert(firstDiv[0].isEqualNode(divs[0]));
	});
});
