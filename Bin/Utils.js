class Utils {
	constructor() {
		this.score = 0;
		this.timer = 45;
	}

	showScore() {
		fill(255, 0, 0);
		text(this.score, 225, 50);
	}

	showTimer() {
		fill(255, 0, 0);
		text(this.timer, 375, 50);
		if (frameCount % 60 == 0 && this.timer > 0) {
			this.timer--;
		} else if (this.timer == 0) {
			states.game = false;
			states.gameOver = true;
			TARGETS = [];
		}
	}
}
