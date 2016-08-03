import assert from 'assert';

export const equalElements = (initial, copy) => {
	assert.equal(initial.length, copy.length);

	initial.forEach((element, index) => {
		assert(element.isEqualNode(copy[index]));
	});
};
