function Arvore() {
	this.segmentos;

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

	this.build = function() {
		this.angIni = random(this.angIniMin, this.angIniMax);

		this.tx = this.posXIni + this.alturaTronco * cos(this.angIni);
		this.ty = this.posYIni + this.alturaTronco * sin(this.angIni);
		this.segmentos[0] = new segmento(this.posXIni,this.posYIni,this.tx,this.ty,this.espessuraTronco, this.cor);

		this.desenhaRamos(this.tx, this.ty, this.angIni, this.alturaTronco, this.espessuraTronco, this.geracoes);
	};

	this.desenhaRamos = function(cx, cy, angIni, compIni, largIni, gen) {
		--gen;
		let angPasso = PI/(this.nRamos+1);
		let comp = compIni*random(this.compVarMin,this.compVarMax);
		let larg = largIni*random(this.largVarMin,this.largVarMax);

		for(let ang = angIni-HALF_PI+angPasso; ang < angIni+HALF_PI-angPasso; ang += angPasso) {
			let angTmp = random(ang-(this.angVariation/2),ang+(this.angVariation/2));
			let ax = cx + comp * cos(angTmp);
			let ay = cy + comp * sin(angTmp);

			append(this.segmentos, new segmento(cx, cy, ax, ay,larg, this.cor));

			if(gen > 0) {
				this.desenhaRamos(ax, ay, ang, comp, larg, gen);
			}
		}
	};

	this.desenha = function() {
		this.desenhaTronco();
		this.desenhaSegmentos();
	};

	this.desenhaSegmentos = function() {
		for(let x = 0; x < this.segmentos.length; x++) {
			this.segmentos[x].desenhaSeg();
		}
	};

	this.desenhaTronco = function() { this.segmentos[0].desenhaSeg(); 
	};
}