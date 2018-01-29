function segmento(ax,ay,bx,by,esp,cor) {
	this.ax = ax;
	this.ay = ay;
	this.bx = bx;
	this.by = by;
	this.esp = esp;
	this.cor = cor;

	this.desenhaSeg = function() {
		stroke(this.cor);
		strokeCap(PROJECT);
		strokeWeight(this.esp);
		line(this.ax, this.ay, this.bx, this.by);
	}
}