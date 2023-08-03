export
function range(size: number, startValue = 0): number[] {
	return [ ...Array(size).keys() ].map(i => i + startValue);
}

export
function isInteger(value: string) {
	return /^-?\d+$/.test(value);
}
