/**
 * Finds elements in the given scope, filtered by the given selector
 * @param  {selector|element} paramSelector The elements to find
 * @param  {selector|element} [paramScope=document] The scope to search for the elements
 * @return {array} A set of elements
 */
export const fetchElements = function fetchElements(paramSelector, paramScope = document) {
	const result = [];
	let scopes = Array.isArray(paramScope) ? [...paramScope] : [paramScope];

	if (typeof paramScope === 'string') {
		scopes = Array.from(document.querySelectorAll(paramScope));
	}

	if (scopes.length > 0 && typeof paramSelector === 'string') {
		// selector
		scopes.forEach(scope => {
			result.push(...Array.from(scope.querySelectorAll(paramSelector)));
		});
	} else if (Array.isArray(paramSelector) === true) {
		// dombox set - elements already fetched
		result.push(...paramSelector);
	} else if (typeof paramSelector === 'object') {
		// dom node
		if (paramSelector.length > 0) {
			result.push(...paramSelector);
		} else {
			result.push(paramSelector);
		}
	}

	return result;
};

export const $ = function domBox(paramSelector, paramScope = document, ...paramModifiers) {
	const modifiers = [];
	let scope = paramScope;

	if (typeof paramScope === 'object' && paramScope.hasOwnProperty('mod') === true) {
		modifiers.push(paramScope, ...paramModifiers);
		scope = document;
	}

	if (paramModifiers.length > 0) {
		modifiers.push(...paramModifiers);
	}

	let result = fetchElements(paramSelector, scope);

	modifiers.forEach(modifier => {
		result = modifier.mod.call(result, ...modifier.args);
	});

	return result;
};

export default $;

export {addClass} from './modules/add_class';
export {removeClass} from './modules/remove_class';
export {hasClass} from './modules/has_class';
export {first} from './modules/first';
export {last} from './modules/last';
export {find} from './modules/find';
export {val} from './modules/val';
export {show} from './modules/show';
export {hide} from './modules/hide';
