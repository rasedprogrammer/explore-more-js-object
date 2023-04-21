// crate object useing object literals
const players = {};
players.name = "Rased";
players.age = 27;
players.bat = function () {
	console.log("Hello From Function");
};
// console.log(players);
// players.bat();

const student = {
	name: "Student",
	age: 28,
	ball: function () {
		console.log("throw the ball");
	},
	fee: 20000,
};

// Object Constructor
const person = new Object();
// console.log(person);

// Object crate method
// const item = Object.create(null);
const studentName = Object.create(student);
// console.log(studentName.name);
// console.log(studentName.friend);

// Class
class Person {
	name = "Rased";
	address = "Dhaka";
	constructor(age) {
		this.age = age;
	}
}
const person1 = new Person(27);
console.log(person1);
