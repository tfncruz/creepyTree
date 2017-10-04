var arvore = new Arvore();

function setup() {
	createCanvas(800, windowHeight);

	// cx,cy,altPercentage
	arvore.initArvore(width/2, height, 0.3);
}

function draw() {
	background(255);

	// esp
	arvore.desenhaTronco(50);

	// tx, ty, angIni, compIni, largIni, gen, nRamos
	arvore.desenhaRamos(arvore.tx, arvore.ty, PI, arvore.alturaTronco, arvore.espessuraTronco, 4, 2);
}