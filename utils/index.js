export function delay(t = 1500) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, t);
	});
}
