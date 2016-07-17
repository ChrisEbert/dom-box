import assert from 'assert';
import last from '../modules/last';

describe('last', () => {
	it('should return the last element', () => {
		document.body.innerHTML = '<div></div><div id="last"></div>';
		const divs = Array.from(document.querySelectorAll('div'));
		const lastDiv = last.call(divs);

		assert.equal(lastDiv.length, 1);
		assert(lastDiv[0].isEqualNode(divs[divs.length - 1]));
	});
});
