// *** Build a Factory Functions *** \\
/*
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  // This is a neat hack that JS does, creates the key value pairs for you!!
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff);
console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'
*/

// *** Scope and Closure *** \\
/*
const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction('taco');

printString(); // ERROR!!
capitalizeString(); // ERROR!!
taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"
*/

// *** Inheritance with factories *** \\
/*
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName} = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
}

const jeff = Nerd('jeff');

jeff.sayName(); // my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
*/

// *** Delegation / Differential Inheritance *** \\
/*
// Using factory function approach = Object.create()
const proto = {
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
};

console.log(proto)

const greeter = (name) => Object.assign(Object.create(proto), {
  name
});

const george = greeter('george');
console.log(george)

const msg = george.hello();

console.log(msg);
// You can avoid property delegation by setting the prototype to `null` using `Object.create(null)`.
// Delegation is not a good option for storing state.
*/

// *** Mixins *** \\
/*
// For example, you can turn any object into an event emitter by mixing in an `EventEmitter3` prototype
import Events from 'eventemitter3';

const object = {};

Object.assign(object, Events.prototype);

object.on('event', payload => console.log(payload));

object.emit('event', 'some data'); // 'some data'
*/

// *** Functional Inheritance *** \\
/*
import Events from 'eventemitter3';

const rawMixin = function () {
  const attrs = {};

  return Object.assign(this, {
    set (name, value) {
      attrs[name] = value;

      this.emit('change', {
        prop: name,
        value: value
      });
    },

    get (name) {
      return attrs[name];
    }
  }, Events.prototype);
};

const mixinModel = (target) => rawMixin.call(target);

const george = { name: 'george' };
const model = mixinModel(george);

model.on('change', data => console.log(data));

model.set('name', 'Sam');

// Note in the example above, we have the `mixinModel()` wrapper around the actual functional mixin, `rawMixin()`. The reason we need that is because we need to set the value of `this` inside the function, which we do with `Function.prototype.call()`. We could skip the wrapper and let callers do that instead, but that would be obnoxious.
*/

// *** Module Pattern *** \\
/*
// this is using IIFE
var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello World';
  var publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure
*/