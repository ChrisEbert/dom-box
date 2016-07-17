import wizard from '../mod_wizard';

/**
 * Reduces the current set to the first element in the set.
 * @name first
 * @return {Array} The first element.
 *
 * @example
 * //<ul>
 * // <li class="first"></li>
 * // <li></li>
 * //	<li></li>
 * //</ul>
 *
 * $('li', 'ul', first()); // ['li.first']
 */
const mod = function first() {
	return this.slice(0, 1);
};

export default mod;
export const first = wizard(mod);
