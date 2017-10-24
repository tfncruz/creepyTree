function Arvore() {
	this.segmentos = [];

	this.geracoes;
	this.nRamos;
	this.cor;

	this.tx;
	this.ty;
	this.angIni;
	this.posXIni;
	this.posYIni;
	this.angIniMin;
	this.andIniMax;
	this.angVariation;
	this.alturaTronco;
	this.espessuraTronco;

	this.genPercentageComp;
	this.genPercentageLarg;

	this.compVarMin;
	this.compVarMax;

	this.initArvore = function(
		cx,cy, gen, nRamos,
		altTronco, espTronco, 
		compPerc, compVarMin, compVarMax,
		angIniMin, angIniMax, angVariation, 
		largPerc, largVarMin, largVarMax, cor) {
		
		this.geracoes = gen;
		this.nRamos = nRamos;
		this.cor = cor;

		this.posXIni = cx;
		this.posYIni = cy;
		this.alturaTronco = altTronco;
		this.espessuraTronco = espTronco;
		this.genPercentageComp = compPerc;
		this.compVarMin = compVarMin;
		this.compVarMax = compVarMax;
		this.angIniMin = angIniMin;
		this.angIniMax = angIniMax;
		this.angVariation = angVariation;
		this.genPercentageLarg = largPerc;
		this.largVarMin = largVarMin;
		this.largVarMax = largVarMax;

		this.angIni = random(this.angIniMin, this.angIniMax);

		this.tx = this.posXIni + this.alturaTronco * cos(this.angIni);
		this.ty = this.posYIni + this.alturaTronco * sin(this.angIni);
		this.segmentos[0] = new segmento(this.posXIni,this.posYIni,this.tx,this.ty,this.espessuraTronco, this.cor);

		this.desenhaRamos(this.tx, this.ty, this.angIni, this.alturaTronco, this.espessuraTronco, this.geracoes);
	}

	this.desenhaSegmentos = function() {
		for(var x = 0; x < this.segmentos.length; x++) {
			this.segmentos[x].desenhaSeg();
		}
	}

	this.desenhaTronco = function() { 
		this.segmentos[0].desenhaSeg(); 
	}

	this.desenhaRamos = function(cx, cy, angIni, compIni, largIni, gen) {
		--gen;
		var angPasso = PI/(this.nRamos+1);
		var comp = compIni*random(this.compVarMin,this.compVarMax);
		var larg = largIni*random(this.largVarMin,this.largVarMax);

		for(var ang = angIni-HALF_PI+angPasso; ang < angIni+HALF_PI-angPasso; ang += angPasso) {
			var angTmp = random(ang-(this.angVariation/2),ang+(this.angVariation/2));
			var ax = cx + comp * cos(angTmp);
			var ay = cy + comp * sin(angTmp);

			append(this.segmentos, new segmento(cx, cy, ax, ay,larg, this.cor));

			if(gen > 0) {
				this.desenhaRamos(ax, ay, ang, comp, larg, gen);
			}
		}

	}
}