let XPOSITIONS = [75, 225, 375];

class Target {
	constructor(targetNumber) {
		this.targetNumber = targetNumber;
		this.xPosition = XPOSITIONS[targetNumber - 1];
		this.yPosition = Math.round(((height / 5) * -0.5) / 10) * 10;
		this.radius = 70;
		this.solution = null;
	}

	show() {
		this.yPosition += 1;
		this.solution = PROBLEM.mathsOptions[this.targetNumber - 1];
		fill(255);
		noStroke();
		circle(this.xPosition, this.yPosition, this.radius);
		fill(0);
		textSize(32);
		textAlign(CENTER, CENTER);
		text(PROBLEM.mathsOptions[this.targetNumber - 1], this.xPosition, this.yPosition + 2);
		stroke(255);
		strokeWeight(3);
		noFill();
		bezier(this.xPosition - 5, this.yPosition + 25, this.xPosition + 20, this.yPosition + 60, this.xPosition - 10, this.yPosition + 40, this.xPosition + 10, this.yPosition + 70);
		if (this.yPosition >= height + 100) {
			UTILS.score -= 5;
			TARGETS = [];
			setTimeout(function () {
				states.newRound = true;
			}, 1000);
		}
	}
}
