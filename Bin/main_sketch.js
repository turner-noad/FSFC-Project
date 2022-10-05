let PLAYER, COMMAND_BAR, PROBLEM, UTILS;
let TARGETS = [];
let BULLETS = [];

let states = {
	menu: false,
	game: false,
	gameOver: false,
	newRound: false,
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	PLAYER = new Player();
	COMMAND_BAR = createInput();
	COMMAND_BAR.input(commandInputted);

	PROBLEM = new Problem();
	UTILS = new Utils();
}

function windowResized() {
	resizeCanvas(700, windowHeight);
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
	} else if (this.value().toLowerCase() == "shoot") {
		this.value("");
		BULLETS[BULLETS.length] = new Bullet();
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

function newProblem() {
	PROBLEM.createProblem();
	for (let i = 1; i < 4; i++) {
		TARGETS[i - 1] = new Target(i);
	}
}

function draw() {
	if (states.game) {
		drawUI();
		if (states.newRound) {
			newProblem();
			states.newRound = false;
		}
		for (let i = 0; i < BULLETS.length; i++) {
			if (BULLETS[i].yPosition <= 0) BULLETS.splice(i, 1);
			if (BULLETS[i]) BULLETS[i].show();
		}

		for (let i = 0; i < TARGETS.length; i++) {
			TARGETS[i].show();
		}

		PLAYER.show();
		PROBLEM.show();
		UTILS.showScore();
		UTILS.showTimer();
	}
}
