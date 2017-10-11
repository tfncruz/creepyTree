function segmento(ax,ay,bx,by,esp) {
	this.ax = ax;
		this.ay = ay;
		this.bx = bx;
		this.by = by;
		this.esp = esp;

	this.desenhaSeg = function() {
		stroke(0);
		strokeCap(PROJECT);
		strokeWeight(this.esp);
		line(this.ax, this.ay, this.bx, this.by);
	}
}