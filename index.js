var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Bilu');
var tom = new Cat();
var Micky = new Mouse();

// dog.eat(tom);
// console.log(dog);
// dog.sayHi();

tom.eat(Micky);
console.log(tom);