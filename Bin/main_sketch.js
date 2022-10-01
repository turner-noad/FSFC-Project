let PLAYER;

let states = {
	menu: false,
	game: true,
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	PLAYER = new Player();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function drawUI() {
	fill(40);
	rect(0, 0, 450, height); //Main Game Frame - 450, height

	/* TEMP */
	strokeWeight(4);
	stroke(0);
	line(150, 0, 150, height);
	line(300, 0, 300, height);
	line(0, height / 5, 450, height / 5);
	line(0, (height / 5) * 2, 450, (height / 5) * 2);
	line(0, (height / 5) * 3, 450, (height / 5) * 3);
	line(0, (height / 5) * 4, 450, (height / 5) * 4);
}

function draw() {
	drawUI();
	if (states.game) {
		PLAYER.show();
	}
}
