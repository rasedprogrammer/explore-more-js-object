const student = {
	name: "Rased",
	age: 27,
	money: 50000,
	hoby: ["Coding", "Gaming", "Watching Drama"],
	work: function () {
		return this.name + " Go to Work Every Time 09: 30 am.";
		// console.log(this.name, " Go to Work Every Time 09: 30 am.");
	},
	exam: function (subject) {
		this.work();
		return `${this.name} is atten to  ${subject} exam today.`;
	},
	toMyFriend: function (amount) {
		this.money = this.money - amount;
		return this.money;
	},
};
const func = student.work();
// console.log(student.hoby[1]);
// console.log(func);
const examPre = student.exam("Science");
// console.log(examPre);
const moneyFunc = student.toMyFriend(2000);
console.log(moneyFunc);
