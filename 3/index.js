var num = 600851475143;
for (let factor = 2; factor < num; factor++) {
	if (num % factor === 0) {
		num = num/factor;
		factor--;
	}
}
console.log(num);