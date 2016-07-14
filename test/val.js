import assert from 'assert';
import val from '../modules/val';

describe('val', () => {
	it('should return the value of the first input if it used as getter', () => {
		document.body.innerHTML = '<input value="1" /><input value="2" />';
		const inputs = Array.from(document.querySelectorAll('input'));
		const value = val.call(inputs);

		assert.equal(value, '1');
	});

	it('should set the value of each element in the set, if used as setter', () => {
		document.body.innerHTML = '<input /><input />';
		const inputs = Array.from(document.querySelectorAll('input'));

		val.call(inputs, 'setted!');

		inputs.forEach(input => {
			assert.equal(input.value, 'setted!');
		});
	});

	it('should return the same set of elements if used as setter', () => {
		document.body.innerHTML = '<input /><input />';
		const inputs = Array.from(document.querySelectorAll('input'));

		assert.equal(val.call(inputs, 'setted!'), inputs);
	});
});
