import wizard from '../mod_wizard';

/**
 * Removes one or more classes from each of the selected elements.
 * @name removeClass
 * @param  {String} cssClass - One or more space separted classes.
 * @return {Array} The selected elements.
 *
 * @example
 * $('div', removeClass('foo'));
 * $('div', removeClass('foo bar'));
 */
const mod = function removeClass(cssClass) {
	const cssClasses = cssClass.split(' ');

	this.forEach(element => {
		element.classList.remove(...cssClasses);
	});

	return this;
};

export default mod;
export const removeClass = wizard(mod);
