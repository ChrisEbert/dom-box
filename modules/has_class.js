import wizard from '../mod_wizard';

/**
 * Checks if at least one element in the current set contains the given class or classes.
 * @name hasClass
 * @param  {String} cssClass - One or more space separted classes.
 * @return {Boolean} Returns true if there is a match.
 *
 * @example
 * $('div', addClass('foo'));
 * $('div', addClass('foo bar'));
 */
const mod = function hasClass(cssClass) {
	const cssClasses = cssClass.split(' ');

	return this.some(element => {
		return element.classList.contains(...cssClasses);
	});
};

export default mod;
export const hasClass = wizard(mod);
