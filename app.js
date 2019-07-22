let person1 = {
    name: 'Rae',
    sayHello: function sayHello () {console.log(`Hello! My name is ${this.name}`)}
};

person1.sayHello();

function Person (name, city, age) {
    this.name = name,
    this.city = city,
    this.age = age
}

Person.prototype.sayHello = function () {
    console.log(`Hello! my name is ${this.name}, I am ${this.age}, and I live in ${this.city}.`);
};

let p1 = new Person('Rae','Nashville', 27);
let p2 = new Person('Boyo', 'Houston', 23);
let p3 = new Person('Seth', 'St. Louis', 29);
let p4 = new Person('Levi', 'Nashville', 2);
let p5 = new Person('Haddie', 'Nashville', 1);
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();
