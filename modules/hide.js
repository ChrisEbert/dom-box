import wizard from '../mod_wizard';

/**
 * Hide the selected elements.
 * @name hide
 * @return {Array} The selected elements.
 *
 * @example
 * $('div', hide());
 */
const mod = function hide() {
	this.forEach(element => {
		element.style.display = 'none';
	});

	return this;
};

export default mod;
export const hide = wizard(mod);
