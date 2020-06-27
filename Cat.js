var Mouse = require('./Mouse');

function Cats() {
	this.stomach = [];
}

Cats.prototype.eat = function(animal){
	if (animal instanceof Mouse){
		animal.die();
		this.stomach.push(animal);
	}else {
		throw new Error('Cat can only mouse!');
	}
};

module.exports = Cats;