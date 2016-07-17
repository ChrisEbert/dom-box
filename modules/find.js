import wizard from '../mod_wizard';
import {fetchElements} from '../index';

/**
 * Finds the descendants in the current set, filtered by the given selector.
 * @name find
 * @param  {String} selector - A selector expression.
 * @return {Array} A set of fetched elements.
 *
 * @example
 * //<article>
 * //	<section></section>
 * //	<section></section>
 * //</article>
 * $('article', find('section')) // ['section', 'section']
 */
const mod = function find(selector) {
	const newElements = [];

	this.forEach(element => {
		newElements.push(...fetchElements(selector, element));
	});

	return newElements;
};

export default mod;
export const find = wizard(mod);
