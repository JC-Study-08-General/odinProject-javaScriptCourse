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
