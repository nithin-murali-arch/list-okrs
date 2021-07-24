/* eslint-disable no-debugger */
export function getNumberString(number) {
	const string = 'abcdefghijklmnopqrstuvwxyz';
	let currentString = '';
	if (number === 0) {
		return string.charAt(0);
	}
	while (number > 0) {
		const index = number % 26;
		currentString += string.charAt(index);
		number = (number - index) / 26;
	}
	return currentString;
}

export function snakeCaseToWord(string) {
	const words = string.split('_');
	return words.map((word) => word.charAt(0).toUpperCase() + word.substring(1, word.length));
}
