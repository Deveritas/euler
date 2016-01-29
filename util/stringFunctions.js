export function stripNewlines (text) {
	"use strict";
	return text.raw[0].replace(/\n/g, '');
}

export function charArray (text) {
	"use strict";
	if (text.raw && text.raw.length) {
		return Array.from(text.raw[0]);
	} else {
		return Array.from(text);
	}
}