import wizard from '../mod_wizard';

/**
 * Get the value of the first element or set the value of each element.
 * @name val
 * @param  {String|Number} [value] - The functions works as setter if this parameter is given.
 * @return {Array|String} The current set of matched elements if the function
 *                        is used as setter, or the value of the first element if
 *                        the function is used as getter.
 *
 * @example
 * // <input type="text" value="foo" />
 * $('input', val()); // foo
 * $('input', val('bar')); // <input type="text" value="bar" />
 */
const mod = function val(value) {
	if (typeof value === 'undefined') {
		return this[0].value;
	}

	this.forEach(element => {
		element.value = value;
	});

	return this;
};

export default mod;
export const val = wizard(mod);
