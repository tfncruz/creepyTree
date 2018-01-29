// UI
let alturaTroncoSlider, espTroncoSlider;
let genSlider, lengthVarSlider, widthVarSlider;
let trunkVarSlider, angVarSlider, cor;

let arvore;

function setup() {
	createCanvas(windowWidth, windowHeight);

	buildUI();
	arvore  = new Arvore();	
	buildTree();
}

function draw() {
	background(255);
	arvore.desenha();
}

function buildUI() {
	const draggableDiv = createDiv("");
	draggableDiv.id("draggable");
	draggableDiv.position(10,10);

	const h1 = createElement("h1", "creepy tree v1");
	h1.parent(draggableDiv);

	genSlider = createSlider(2,13,9,1);
	const gen = createP("generations");
	gen.parent(draggableDiv);
	genSlider.parent(draggableDiv);
	genSlider.changed(function() { buildTree(); });

	const altTroncoLabel = createP("trunk height");
	altTroncoLabel.parent(draggableDiv);
	alturaTroncoSlider = createSlider(0, 0.5, 0.2, 0.01);
	alturaTroncoSlider.parent(draggableDiv);
	alturaTroncoSlider.changed(function() { buildTree(); });

	const espTronco = createP("trunk width");
	espTronco.parent(draggableDiv);
	espTroncoSlider = createSlider(0.1, 1, 0.4, 0.01);
	espTroncoSlider.parent(draggableDiv);
	espTroncoSlider.changed(function() { buildTree(); });

	const trunkVar = createP("trunk angle variation");
	trunkVar.parent(draggableDiv);
	trunkVarSlider = createSlider(0, 3.14, 0.5, 0.01);
	trunkVarSlider.parent(draggableDiv);
	trunkVarSlider.changed(function() { buildTree(); });

	const lengthVar = createP("lenght variation");
	lengthVar.parent(draggableDiv);
	lengthVarSlider = createSlider(0.2, 0.9, 0.9, 0.01);
	lengthVarSlider.parent(draggableDiv);
	lengthVarSlider.changed(function() { buildTree(); });

	const widthVar = createP("width variation");
	widthVar.parent(draggableDiv);
	widthVarSlider = createSlider(0.3, 0.7, 0.3, 0.01);
	widthVarSlider.parent(draggableDiv);
	widthVarSlider.changed(function() { buildTree(); });

	const angVar = createP("angle variation");
	angVar.parent(draggableDiv);
	angVarSlider = createSlider(0, 1.5, 0.8, 0.01);
	angVarSlider.parent(draggableDiv);
	angVarSlider.changed(function() { buildTree(); });

	cor = createInput("#000000", "color");
	cor.id("colorPicker");
	cor.parent(draggableDiv);
	cor.changed(function() { buildTree(); });

	const refresh = createButton("refresh");
	refresh.parent(draggableDiv);
	refresh.mousePressed( function() { buildTree(); });

	const saveTree = createButton("save tree");
	saveTree.parent(draggableDiv);
	saveTree.mousePressed(function() { saveCanvas("myTree", "png"); });
}

function buildTree() {
	arvore.segmentos = [];
	arvore.geracoes = genSlider.value();
	arvore.nRamos = 2;
	arvore.cor = cor.value();

	arvore.posXIni = width/2;
	arvore.posYIni = height;

	arvore.genPercentageComp = 0.65;
	arvore.compVarMin = arvore.genPercentageComp - lengthVarSlider.value()/2;
	arvore.compVarMax = arvore.genPercentageComp + lengthVarSlider.value()/2;
	arvore.angIniMin = 4.71 - trunkVarSlider.value()/2;
	arvore.angIniMax = 4.71 + trunkVarSlider.value()/2;
	arvore.angVariation = angVarSlider.value();
	arvore.genPercentageLarg = 0.5;
	arvore.largVarMin = arvore.genPercentageLarg - widthVarSlider.value()/2;
	arvore.largVarMax = arvore.genPercentageLarg + widthVarSlider.value()/2;

	arvore.alturaTronco = height * alturaTroncoSlider.value();
	arvore.espessuraTronco = arvore.alturaTronco * espTroncoSlider.value();
	

	arvore.build();
}