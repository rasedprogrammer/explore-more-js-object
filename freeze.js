const bottle = {
	color: "Yellow",
	price: 500,
	isCleaned: true,
	capacity: 1,
};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
const twoDimensional = [
	["color", "Yellow"],
	["price", 500],
	["isCleaned", true],
	["capacity", 1],
];

// Object Delete Method
console.log(bottle);
// Object Freeze Or do not give any permission to Object keys & values
Object.freeze(bottle);
bottle.price = 1500;
// Freeze Is Not Allowed To Add Any Kind Of New Keys & Values
bottle.height = 8;
/**
 * Freeze Can not Change Value
 * Freeze Method Can Not Add Any Keys
 * [[ 'color', 'Yellow' ],[ 'price', 500 ],[ 'isCleaned', true ],[ 'capacity', 1 ]]
 * [[ 'color', 'Yellow' ],[ 'price', 500 ],[ 'isCleaned', true ],[ 'capacity', 1 ]]
 */
// Object Delete Method
delete bottle.isCleaned;
// If Delete Method Work
/**
 * [[ 'color', 'Yellow' ],[ 'price', 500 ],[ 'isCleaned', true ],[ 'capacity', 1 ]]
 * [[ 'color', 'Yellow' ],[ 'price', 500 ],[ 'isCleaned', true ],[ 'capacity', 1 ]]
 */
console.log(bottle);

/**
 * // Object Delete Method
console.log(bottle);
// Object Seal Or do not give any permission to Object keys & values
Object.seal(bottle);
bottle.price = 1500;
// If Seal Method Work
/**
 * Seal Can Change Value
 * But Seal Method Can Not Add Any Keys
 * [[ 'color', 'Yellow' ],[ 'price', 500 ],[ 'isCleaned', true ],[ 'capacity', 1 ]]
 * [[ 'color', 'Yellow' ],[ 'price', 1500 ],[ 'isCleaned', true ],[ 'capacity', 1 ]]
 * 
 * bottle.height = 15;
 * // Object Delete Method
delete bottle.isCleaned;
// If Delete Method Work
/**
 * [[ 'color', 'Yellow' ],[ 'price', 500 ],[ 'isCleaned', true ],[ 'capacity', 1 ]]
 * [[ 'color', 'Yellow' ],[ 'price', 500 ],[ 'capacity', 1 ]]
 * // console.log(bottle);
 */
