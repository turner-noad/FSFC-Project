class Bullet {
	constructor(x, y) {
		this.xPosition = PLAYER.x_position;
		this.yPosition = PLAYER.y_position;
		this.radius = 20;
	}

	show(arrayIndex) {
		fill(255, 0, 0);
		noStroke();
		circle(this.xPosition, this.yPosition, this.radius);
		this.yPosition -= 10;

		for (let i = 0; i < TARGETS.length; i++) {
			let distance = dist(this.xPosition, this.yPosition, TARGETS[i].xPosition, TARGETS[i].yPosition);
			if (distance < 5) {
				TARGETS = [];
				console.log(`COLLIDE ${i}`);
				BULLETS.splice(arrayIndex, 1);
			}
		}
	}
}
