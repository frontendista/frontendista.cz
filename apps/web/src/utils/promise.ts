export async function delayPromise<T>(promise: Promise<T>, delayMs: number): Promise<T> {
	const [result] = await Promise.all([
		promise,
		new Promise<void>(resolve => setTimeout(resolve, delayMs))
	]);

	return result;
}
