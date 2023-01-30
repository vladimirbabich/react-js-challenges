function isPalindrome(str) {
	const lStr = str.toString().toLowerCase();
	for (let i = 0; i < lStr.length / 2 + 1; i++) {
		if (lStr[i] != lStr[lStr.length - i - 1])
			return false
	}
	return true

}
// console.log(isPalindrome('adaada'))
// console.log(isPalindrome('ababbaba'))
// console.log(isPalindrome(1233421))

const str = '((([](({}())))))'
function checkBrackets(str) {
	const preparedStr = str.match(/[(){}\[\]]/g).join().replaceAll(',', '');
	const brackets = {
		'(': ')',
		'{': '}',
		'[': ']'
	}
	const bracketsCount = preparedStr.split('').length
	if (bracketsCount % 2 != 0)
		return false;

	const stack = [];
	for (let i = 0; i < preparedStr.length; i++) {
		if (brackets.hasOwnProperty(preparedStr[i])) {
			stack.push(preparedStr[i])
			continue;
		}
		else if (!stack.length) { return false }
		// console.log(`${brackets[stack[stack.length - 1]]} == ${preparedStr[i]}`)
		if (brackets[stack[stack.length - 1]] == preparedStr[i])
			stack.pop();
		else return false

	}
	return true
}

// console.log(checkBrackets(str));

const array = [1, 2, 3, 3,2, 2, 3, 65,1, 56, 65, 5]

const getUniqueValues = (arr) => {
	const uniqueValues = [];
	const recurrentValues = [];
	for (let i = 0; i < arr.length; i++) {
		const index = uniqueValues.indexOf(arr[i])
		if (index > -1) {
			uniqueValues.splice(index, 1);
			recurrentValues.push(arr[i])
			continue
		}
		if (recurrentValues.indexOf(arr[i]) > -1) { continue; }
		uniqueValues.push(arr[i]);
	}
	return uniqueValues
}
console.log(getUniqueValues(array))