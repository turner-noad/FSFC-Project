let PLAYER, COMMAND_BAR, PROBLEM;
let TARGETS = [];

let states = {
	menu: false,
	game: true,
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	PLAYER = new Player();
	COMMAND_BAR = createInput();
	COMMAND_BAR.input(commandInputted);

	PROBLEM = new Problem();
	TARGETS[0] = new Target();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function commandInputted() {
	if (this.value() == " ") this.value("");

	if (this.value().toLowerCase() == "left") {
		this.value("");
		PLAYER.move("left");
	} else if (this.value().toLowerCase() == "right") {
		this.value("");
		PLAYER.move("right");
	} else if (this.value().toLowerCase() == "up") {
		this.value("");
		PLAYER.move("up");
	} else if (this.value().toLowerCase() == "down") {
		this.value("");
		PLAYER.move("down");
	}
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

	/* To Position & Style */
	COMMAND_BAR.position(500, 10);
	COMMAND_BAR.elt.focus();
}

function draw() {
	drawUI();
	if (states.game) {
		PLAYER.show();
		TARGETS[0].show();
	}
}
