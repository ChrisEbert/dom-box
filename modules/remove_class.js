import wizard from '../mod_wizard';

const mod = function removeClass(cssClass) {
	const cssClasses = cssClass.split(' ');

	this.forEach(element => {
		element.classList.remove(...cssClasses);
	});

	return this;
};

export default mod;
export const removeClass = wizard(mod);
