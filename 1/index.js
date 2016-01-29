const max = 1000;
var total = 0;
for (let i = 0; i < max; i++) {
	if (i % 3 && i % 5) {
	} else {
		total += i;
	}
}
console.log(total);