import wizard from '../mod_wizard';

/**
 * Adds one or more classes to each of the selected elements.
 * @name addClass
 * @param  {String} cssClass - One or more space separted classes.
 * @return {Array} The selected elements.
 *
 * @example
 * $('div', addClass('foo'));
 * $('div', addClass('foo bar'));
 */
const mod = function addClass(cssClass) {
	const cssClasses = cssClass.split(' ');

	this.forEach(element => {
		element.classList.add(...cssClasses);
	});

	return this;
};

export default mod;
export const addClass = wizard(mod);
