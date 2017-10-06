var alturaTronco, espTronco;
var geracoes, nRamos;
var compPercentagem;
var compVarMin, compVarMax;
var largPercentagem;
var angIniMin, angIniMax;
var largVarMin, largVarMax;

var arvore = new Arvore();

function setup() {
	createCanvas(windowWidth, windowHeight);

	geracoes = 9;
	nRamos = 2;
	alturaTronco = height*0.2;
	espTronco = alturaTronco*0.4;
	compPercentagem = 0.7;
	compVarMin = 0.5;
	compVarMax = 0.9;

	angIniMin = 4.4;
	angIniMax = 5.1;

	largPercentagem = 0.6;
	largVarMin = 0.3;
	largVarMax = 0.7;

	arvore.initArvore(width/2, 
		height,
		geracoes, 
		nRamos,
		alturaTronco,
		espTronco,
		compPercentagem, 
		compVarMin,
		compVarMax, 
		angIniMin,
		angIniMax,
		largPercentagem,
		largVarMin,
		largVarMax
		);
}

function draw() {
	background(255);
	arvore.desenhaTronco();
	arvore.desenhaSegmentos();
}