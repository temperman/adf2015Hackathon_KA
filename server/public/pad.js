function Pad(id, x, y, dx, dy)
{
	if (Pad.getById(id)) return Pad.getById(id);
	Pad.records_[id] = this;

	this.id = id;
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
};

Pad.records_ = {};

Pad.getById = function(padId) {
	return this.records_[padId] || null;
};

Pad.removeById = function(padId) {
	var records = this.records_,
		removedPad = records[padId];

	records[padId] = null;

	return removedPad;
};

Pad.setPosition = function(x, y) {
	this.x = x;
	this.y = y;
};

Pad.setVelocity = function(dx, dy) {
	this.dx = dx;
	this.dy = dy;
};
/*
Pad.update = function() {
	this.x += this.dx;
	this.y += this.dy;
};*/
