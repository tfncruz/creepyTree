var alturaTronco, espTronco;
var geracoes, nRamos;
var compPercentagem;
var compVarMin, compVarMax;
var largPercentagem;
var angIniMin, angIniMax;
var angVariation;
var largVarMin, largVarMax;
var cor;

var arvore = new Arvore();

function setup() {
	createCanvas(windowWidth, windowHeight);

	cor = color(200,0,0);

	geracoes = 9;
	nRamos = 2;
	alturaTronco = height*0.2;
	espTronco = alturaTronco*0.4;
	compPercentagem = 0.7;
	compVarMin = 0.5;
	compVarMax = 0.9;

	angIniMin = 4.4;
	angIniMax = 5.1;
	angVariation = 0.8;

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
		angVariation,
		largPercentagem,
		largVarMin,
		largVarMax,
		cor
		);
}

function draw() {
	background(255);
	arvore.desenhaTronco();
	arvore.desenhaSegmentos();
}