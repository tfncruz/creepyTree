function Arvore() {
	this.tx;
	this.ty;
	this.posXIni;
	this.posYIni;
	this.alturaTronco;
	this.espessuraTronco;

	this.genPercentageComp = 0.5;
	this.genPercentageLarg = 0.5;

	this.initArvore = function(cx,cy,altPercentage) {
		this.posXIni = cx;
		this.posYIni = cy;
		this.alturaTronco = height*altPercentage;
	}

	this.desenhaTronco = function(esp) {
		this.espessuraTronco = esp;
		this.tx = this.posXIni + this.alturaTronco * cos(PI+HALF_PI);
		this.ty = this.posYIni + this.alturaTronco * sin(PI+HALF_PI);
		stroke(0);
		strokeWeight(this.espessuraTronco);
		line(this.posXIni, this.posYIni, this.tx, this.ty);
	}

	this.desenhaRamos = function(tx, ty, angIni, compIni, largIni, gen, nRamos) {
		--gen;
		var angPasso = PI/(nRamos+1);
		var comp = compIni*this.genPercentageComp;
		var larg = largIni*this.genPercentageLarg;

		for(var ang = angIni+angPasso; ang < angIni+PI-angPasso; ang += angPasso) {
			var ax = tx + comp * cos(ang);
			var ay = ty + comp * sin(ang);

			fill(0);
			strokeWeight(larg);
			line(tx, ty, ax, ay);

			if(gen > 0) {
				this.desenhaRamos(ax,ay,ang-HALF_PI,comp,larg,gen,nRamos);
			}
		}

	}
}