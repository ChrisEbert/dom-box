import wizard from '../mod_wizard';

const mod = function addClass(cssClass) {
	const cssClasses = cssClass.split(' ');

	this.forEach(element => {
		element.classList.add(...cssClasses);
	});

	return this;
};

export default mod;
export const addClass = wizard(mod);
