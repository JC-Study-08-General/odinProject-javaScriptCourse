# Objective

Understand these design patterns:

- Plain Old JavaScript Objects and Object Constructors
- Factory Functions and the Module Pattern
- Classes
- ES6 Modules


# CSS
**CSS Functions** = calc, max, min & clamp [w3School-CSS Functions](https://www.w3schools.com/cssref/css_functions.php)

**CSS Frameworks** = Bootstrap & tailwind

**CSS Preprocessors** = SASS, LESS & Stylus

**Screen Break Points** = for mobile friendly design should break at 500px, 1000px, 1200px

# Object Constructors/ Function Constructors
**NameSpaces** = this is used to stop conflicts of functions or variables named the same in different objects. [NameSpace](https://youtu.be/PZQQhirc448)

**Constructor Objects** = What is the difference between class and a constructor?! in simple words a class is like a blueprint and defines the framework that other objects can inherit, a constructor is something that actually creates the object in the program whereas the class only gives the guidelines.

**ProtoTypes**

- **All objects have prototypes** = You can check the object’s prototype by using the Object.getPrototypeOf() function on the object, like Object.getPrototypeOf(player1).
- Created outside of the object and inherited.  This saves duplicating the prototype into every object created.
- created by objectName.prototype = object.create(nameOfPrototype.prototype)
- **Prototypal inheritance** = This kind of inheritance using prototypes is hence named as Prototypal inheritance. JavaScript figures out which properties exist (or do not exist) on the object and starts traversing the chain to find the property or function.

**Helpful Links**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
- https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
- https://javascript.info/prototype-inheritance
- https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

These links look the most useful:
- https://medium.com/free-code-camp/a-beginners-guide-to-javascript-s-prototype-9c049fe7b34
- https://medium.com/free-code-camp/javascript-inheritance-and-the-prototype-chain-d4298619bdae
- https://youtu.be/wstwjQ1yqWQ

# Factory Functions

- No need for the key word 'new' when creating and factory function and you only have sight to what is in the return statement (this makes this public).
- BUT can access private functions not in the return statement, this is called 'closure'.
- CLOSURE = The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope.  In the context of factory functions, closures allow us to create private variables and functions.
- FF are great for encapsulation as it restricts access to only what is returned (public)