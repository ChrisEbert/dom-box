import assert from 'assert';
import last from '../modules/last';

describe('last', () => {
	it('should return the last element', () => {
		document.body.innerHTML = '<div></div><div id="last"></div>';
		const divs = Array.from(document.querySelectorAll('div'));
		const lastDiv = last.call(divs);

		assert.equal(lastDiv.length, 1);
		assert.equal(lastDiv[0].id, divs[divs.length - 1].id);
	});
});
