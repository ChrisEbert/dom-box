import wizard from '../mod_wizard';

const mod = function last() {
	return this.slice(-1);
};

export default mod;
export const last = wizard(mod);
