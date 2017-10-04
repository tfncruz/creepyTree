var arvore = new Arvore();
function setup() {
	createCanvas(800,windowHeight);

	arvore.initArvore(width/2,height,0.3);

}

function draw() {
	arvore.desenhaTronco();
}

function Arvore() {
	this.posXIni;
	this.posYIni;
	this.alturaTronco;

	this.initArvore = function(cx,cy,altPercentage) {
		this.posXIni = cx;
		this.posYIni = cy;
		this.alturaTronco = height*altPercentage;
	}

	this.desenhaTronco = function() {
		var tx = this.posXIni + this.alturaTronco * cos(PI+HALF_PI);
		var ty = this.posYIni + this.alturaTronco * sin(PI+HALF_PI);
		stroke(0);
		strokeWeight(50);
		line(this.posXIni, this.posYIni, tx, ty);
	}

	this.desenhaArvore = function() {

	}
}