class Player {
	constructor() {
		this.x_position = 225;
		this.y_position = Math.round(((height / 5) * 4.5) / 10) * 10;
		this.horizontal_target = 225;
		this.vertical_target = Math.round(((height / 5) * 4.5) / 10) * 10;
		this.horizontal = 2;
		this.vertical = 4.5;
	}

	show() {
		if (this.horizontal_target > this.x_position) this.x_position += 10;
		else if (this.horizontal_target < this.x_position) this.x_position -= 10;
		if (this.vertical_target > this.y_position) this.y_position += 10;
		else if (this.vertical_target < this.y_position) this.y_position -= 10;
		fill(255);
		noStroke();
		circle(this.x_position, this.y_position, 50);
	}

	move(direction) {
		if (direction == "left") {
			if (this.x_position == 75) return this.shake("horizontal");
			this.horizontal_target -= 150;
			this.horizontal--;
		} else if (direction == "right") {
			if (this.x_position == 375) return this.shake("horizontal");
			this.horizontal_target += 150;
			this.horizontal++;
		} else if (direction == "up") {
			if (this.y_position == Math.round(((height / 5) * 0.5) / 10) * 10) return this.shake("vertical");
			this.vertical -= 1;
			this.vertical_target = Math.round(((height / 5) * this.vertical) / 10) * 10;
		} else if (direction == "down") {
			if (this.y_position == Math.round(((height / 5) * 4.5) / 10) * 10) return this.shake("vetical");
			this.vertical += 1;
			this.vertical_target = Math.round(((height / 5) * this.vertical) / 10) * 10;
		}
	}

	shake(axis) {
		console.log("No");
	}
}
