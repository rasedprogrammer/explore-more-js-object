const numbers = [34, 56, 78, 54, 242];
for (const number of numbers) {
	// console.log(number);
}

// For Of Can not be run For Object

const bottle = {
	color: "Yellow",
	price: 500,
	isCleaned: true,
	capacity: 1,
};
const keys = Object.keys(bottle);
for (const key of keys) {
	// console.log(key, bottle[key]);
}
// For in Can be run For Object
for (key in bottle) {
	const value = bottle[key];
	// console.log(key, bottle[key]);
	// console.log(key, value);
}
//  Advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
	console.log(key, value);
}
