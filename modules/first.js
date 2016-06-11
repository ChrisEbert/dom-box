import wizard from '../mod_wizard';

const mod = function first() {
	return this.slice(0, 1);
};

export default mod;
export const first = wizard(mod);
