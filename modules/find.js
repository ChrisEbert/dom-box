import wizard from '../mod_wizard';
import {fetchElements} from '../index';

const mod = function find(selector) {
	const newElements = [];

	this.forEach(element => {
		newElements.push(...fetchElements(selector, element));
	});

	return newElements;
};

export default mod;
export const find = wizard(mod);
