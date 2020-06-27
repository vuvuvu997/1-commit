var Mouse = require('Mouse');

function Cats() {
	this.stomach = [];
}

Cats.prototype.eat = function(animal){
	if (animal instanceof Mouse){
		this.stomach.push(animal);
	}else {
		console.log('Cat can only mouse!');
	}
}

module.exports = Cats;