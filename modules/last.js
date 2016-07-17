import wizard from '../mod_wizard';

/**
 * Reduces the current set to the last element in the set.
 * @name last
 * @return {Array} The last element.
 *
 * @example
 * //<ul>
 * // <li></li>
 * // <li></li>
 * //	<li class="last"></li>
 * //</ul>
 *
 * $('li', 'ul', last()); // ['li.last']
 */
const mod = function last() {
	return this.slice(-1);
};

export default mod;
export const last = wizard(mod);
