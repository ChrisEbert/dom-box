import assert from 'assert';
import wizard from '../mod_wizard';

describe('wizard', () => {
	it('should return a function', () => {
		assert.equal(typeof wizard(), 'function');
	});

	it('should return an inner function which returns an object with the module function', () => {
		const testModule = function testModule() {};
		const innerFunction = wizard(testModule);
		const executedInnerFunction = innerFunction();

		assert.equal(typeof executedInnerFunction.mod, 'function');
		assert.equal(executedInnerFunction.mod.name, 'testModule');
	});

	it('should return an inner function which returns an object with the given arguments', () => {
		const testModule = () => {};
		const testArgument = 'foo';
		const innerFunction = wizard(testModule);
		const executedInnerFunction = innerFunction(testArgument);

		assert.equal(executedInnerFunction.args, testArgument);
	});
});
