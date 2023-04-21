console.log(this);
const kodomAli = {
	name: "kodom",
	age: 36,
	money: 5000,
	study: "Math",
	subjects: ["English", "Bengali", "Chamistry", "Phycies"],
	exam: function () {
		console.log(this);
		return this.name + " is practicing in an exam";
	},
	examArrow: () => {
		console.log(this);
	},
	examNasted: () => {
		const arrow = () => {
			console.log(this);
		};
		arrow();
	},
	imporveExam: function (subject) {
		this.exam();
		return `${this.name} is takeing imporvement exam on ${subject}`;
	},
	treatDay: function (amount, tip) {
		this.money = this.money - amount - tip;
		return this.money;
	},
};
kodomAli.exam();

const badamAli = {
	name: "badam",
	age: 26,
};
badamAli.exam = kodomAli.exam;
badamAli.exam();

const clickHandal = () => {
	console.log(this);
};
document.getElementById("btn-click").addEventListener("click", function () {
	console.log(this);
});
