import assert from 'assert';
import find from '../modules/find';

describe('find', () => {
	it('should return a set, contaiing the filtered descendants', () => {
		document.body.innerHTML = `
			<div class="parent">
				<div class="target"></div>
				<div class="target"></div>
				<button></button>
			</div>
			<div class="parent">
				<div class="target"></div>
			</div>
		`;

		const parents = Array.from(document.querySelectorAll('.parent'));
		const filtered = find.call(parents, '.target');

		assert.equal(filtered.length, 3);
	});
});
