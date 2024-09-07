export function mod(n: number, m: number) {
	return ((n % m) + m) % m;
}

export function round(n: number) {
	return Math.round(n * 100) / 100;
}
