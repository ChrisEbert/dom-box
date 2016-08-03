import wizard from '../mod_wizard';

/**
 * Display the selected elements.
 * @name show
 * @return {Array} The selected elements.
 *
 * @example
 * $('div', show());
 */
const mod = function show() {
	this.forEach(element => {
		element.style.display = 'block';
	});

	return this;
};

export default mod;
export const show = wizard(mod);
