export function zeroArray(length) {
	"use strict";
	return defaultArray(length, 0)
}

export function defaultArray(length, value) {
	"use strict";
	const array = [];
	for (let i = 0; i < length; i++) array[i] = value;
	return array;
}

export function sweep(length, func, data) {
	"use strict";
	if (length > data.length) {
		return [func(data)];
	} else {
		let ret = [];
		for (let i = 0; i+length <= data.length; i++) {
			ret.push(func(data.slice(i, i+length)));
		}
		return ret;
	}
}