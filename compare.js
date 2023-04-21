// const first = { a: 2 };
// const second = { a: 2 };
// if (first === second) {
// 	console.log("they are same");
// } else {
// 	console.log("they are different"); // Result Will Be Different For 1st line code
// }

// Computer memory address object result will be same because you second variable to third variable
// const first = { a: 2 };
// const second = { a: 2 };
//const third = second;
// if (third === second) {
// 	console.log("they are same");
// } else {
// 	console.log("they are different"); // Result Will Be Same For 6th line code
// }

// Do not using this method object & array
//If value order position is same than it will be working
// const first = { a: 2, b: 3 };
// const second = { a: 2, b: 3 };
//If value order position is not same than it will be not working
// const first = { a: 2, c: 3, b: 5 };
// const second = { a: 2, b: 5, c: 3 };
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// if (firstString === secondString) {
// 	console.log("they are same");
// } else {
// 	console.log("they are different"); // Result Will Be Same For 6th line code
// }

// Easy to Use Compara
const first = { a: 2, c: 3, c: 5, e: 6 };
const second = { a: 2, b: 5, c: 3 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

function comparaObject(first, second) {
	const firstKeys = Object.keys(first);
	const secondKeys = Object.keys(second);
	if (firstKeys.length === secondKeys.length) {
		for (const key of firstKeys) {
			if (first[key] !== second[key]) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}
const isSame = comparaObject(first, second);
console.log(isSame);
