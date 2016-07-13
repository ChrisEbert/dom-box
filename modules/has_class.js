import wizard from '../mod_wizard';

const mod = function hasClass(cssClass) {
	const cssClasses = cssClass.split(' ');

	return this.some(element => {
		return element.classList.contains(cssClasses);
	});
};

export default mod;
export const hasClass = wizard(mod);
