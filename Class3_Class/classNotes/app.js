// *** Class *** \\
// Basic Class Structure
/*
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }
}

const just = new Person('Justin', 'Heath')
*/

// Static Methods
/*
class PersonStatic extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  
  static species() {
    return 'Homo sapiens';
  }

  static speciesSentence() {
    return `Humans are classified as ${this.species()}`
  }
}
*/

// Extends - Requires 'super' in the constructure to access the prototypes
/*
class Worker extends Person {
  constructor(firstName, lastName, job) {
    super(firstName, lastName);
    this.job = job;
    this.hasJob = true;
  }

  setJob(job) {
    this.job = job;
  }
}
*/

// Getter - Makes a method accessible like a property i.e. no need for ()
/*
class Person {
  static get species() {
    return 'Homo sapiens';
  }

  static speciesSentence() {
    return `Humans are classified as ${this.species}`
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }
}

const just = new Person('Justin', 'Heath')
*/

// Setter - Sets properties with a single argument
/*
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  set setFullName(name) {
    name = name.split(' ');
    this.setFirstName(name[0]);
    this.setLastName(name[1]);
  }
}

const just = new Person('Justin', 'Heath')
*/