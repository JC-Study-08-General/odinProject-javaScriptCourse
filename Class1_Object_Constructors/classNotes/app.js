// *** Object Constructors *** \\
/*
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log('Example_0', name)
  }
}

// Use the constructor
const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'
*/

// *** The Prototype *** \\
/*
// Prototype is an inherited object.
// Every prototype object inherits from Object.prototype by default!!!!!!!!!
console.log('Example_1', Player.prototype)
console.log('Example_2', player1)
// The return value (result) of this function refers to the .prototype property of the Object Constructor (i.e., Player(name, marker))
console.log('Example_3', Object.getPrototypeOf(player1)) // Use this method not .__proto__
// Same As:
console.log('Example_4', player1.__proto__) // __proto__ this was created as highly unlikely anyone will overwrite this, but is the same as .prototype.
*/


// *** Prototypal Inheritance *** \\
/*
// What do we use Prototypes for?
console.log('Example_5', player1.valueOf())
// How to find the origins of the prototype:
console.log('Example_6a', player1.hasOwnProperty('valueOf')) // false
console.log('Example_6b', Object.prototype.hasOwnProperty('valueOf')) // true
// The chain does not go on forever:
console.log('Example_7', Object.getPrototypeOf(Object.prototype)) // null -- end of the line/chain
*/

// *** Object.setPrototypeOf() *** \\
/*
// Example - add a Person Object Constructor to the Player example, and making Player inherit from Person!
function Person(name) {
  this.name = name
}

Person.prototype.sayName2 = function() {
  console.log('Example_8a', `Hello, I'm ${this.name}!`)
}

Player.prototype.getMarker = function() {
  console.log('Example_8b', `My marker is '${this.marker}'`)
}

Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) // returns Person.prototype NOT Object.prototype now.

player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

player1.sayName2() // Hello, I'm steve!
player2.sayName2() // Hello, I'm also steve!

player1.getMarker() // My marker is 'X'
player2.getMarker() // My marker is 'O'
*/