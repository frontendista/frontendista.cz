Number.prototype.round = function(): number {
	return Math.round(Number(this) * 100) / 100;
};

Number.prototype.isBetween = function(start: number, end: number): boolean {
	return (this as number) >= start && (this as number) <= end;
};
