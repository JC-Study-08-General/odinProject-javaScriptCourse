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
# Design Patterns
This is a great site with all the patterns explain in it:

[Patterns](https://www.patterns.dev/posts#design-patterns)

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

# Factory Functions and the Module Pattern

- No need for the key word 'new' when creating and factory function and you only have sight to what is in the return statement (this makes this public).
- Closures - BUT can access private functions not in the return statement, this is called 'closure'.
- [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
- CLOSURE = The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope.  In the context of factory functions, closures allow us to create private variables and functions.
- FF are great for encapsulation as it restricts access to only what is returned (public)
- You can avoid property delegation by setting the prototype to `null` using `Object.create(null)`.

**Concatenative Inheritance / Cloning / Mixins**
Concatenative inheritance is the process of copying the properties from one object to another, without retaining a reference between the two objects. It relies on JavaScript’s dynamic object extension feature.

- Cloning is a great way to store default state for objects: This process is commonly achieved using `Object.assign()`.

- Mixins - For example, you can turn any object into an event emitter by mixing in an `EventEmitter3` prototype.

- Functional Inheritance - Functions created for the purpose of extending existing objects are commonly referred to as functional mixins. The primary advantage of using functions for extension is that it allows you to use the function closure to encapsulate private data. In other words, you can enforce private state.

- Module - IIFE = if you wrap a function with parentheses and then immediately call the function by adding () to the end of it it is invoke straight away.

**Rule of thumb for use of Factory Functions or Modules**
if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

# Classes
Reference [Article](https://javascript.info/class) for Class 

Getters and Setters reference [Article](https://javascript.info/property-accessors)
- **[Getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)** a function without arguments, that works when a property is read.
- **[Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)** a function with one argument, that is called when the property is set.

- **[Extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)** The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.

# ES6 Modules