class Player {
	constructor() {
		this.x_position = 225;
		this.y_position = (height / 5) * 4.5;
		this.horizontal_target = 225;
	}

	show() {
		fill(255);
		noStroke();
		if (this.horizontal_target > this.x_position) this.x_position += 10;
		else if (this.horizontal_target < this.x_position) this.x_position -= 10;
		circle(this.x_position, this.y_position, 50);
	}

	move(direction) {
		if (direction == "left") {
			if (this.x_position == 75) return this.shake();
			this.horizontal_target -= 150;
		} else if (direction == "right") {
			if (this.x_position == 375) return this.shake();
			this.horizontal_target += 150;
		} else if (direction == "up") {
		} else if (direction == "down") {
		}
	}

	shake() {
		console.log("No");
	}
}
