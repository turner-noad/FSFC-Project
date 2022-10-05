let OPERATIONS = ["+", "-", "*", "/"];

class Problem {
	constructor() {
		this.mathsProblem;
		this.mathsSolution;
		this.mathsOptions = [];
	}

	createProblem() {
		let chosenOperation = OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];

		// Create Problem and Solution
		if (chosenOperation == "+") {
			let int1 = Math.floor(Math.random() * 29) + 1;
			let int2 = Math.floor(Math.random() * 29) + 1;
			this.mathsProblem = int1 + " + " + int2;
			this.mathsSolution = int1 + int2;
		} else if (chosenOperation == "-") {
			let int1 = Math.floor(Math.random() * 65) + 20;
			let int2 = Math.floor(Math.random() * 19) + 1;
			this.mathsProblem = int1 + " - " + int2;
			this.mathsSolution = int1 - int2;
		} else if (chosenOperation == "*") {
			let int1 = Math.floor(Math.random() * 11) + 1;
			let int2 = Math.floor(Math.random() * 11) + 1;
			this.mathsProblem = int1 + " x " + int2;
			this.mathsSolution = int1 * int2;
		} else {
			let int1 = Math.floor(Math.random() * 11) + 1;
			let int2 = Math.floor(Math.random() * 11) + 1;
			let int3 = int1 * int2;
			this.mathsProblem = int3 + " / " + int2;
			this.mathsSolution = int1;
		}

		// Create Options
		this.mathsOptions[0] = this.mathsSolution;

		let ran1 = Math.floor(Math.random() * 79) + 1;
		let ran2 = Math.floor(Math.random() * 79) + 1;

		if (ran1 == this.mathsSolution) ran1++;
		if (ran2 == this.mathsSolution || ran2 == ran1) ran2 -= 2;

		this.mathsOptions[1] = ran1;
		this.mathsOptions[2] = ran2;

		for (var index = this.mathsOptions.length - 1; index > 0; index--) {
			var secondIndex = Math.floor(Math.random() * (index + 1));
			var temp = this.mathsOptions[index];
			this.mathsOptions[index] = this.mathsOptions[secondIndex];
			this.mathsOptions[secondIndex] = temp;
		}
	}

	show() {
		if (states.game) {
			fill(255, 0, 0);
			text(this.mathsProblem, 75, 50);
		}
	}
}
