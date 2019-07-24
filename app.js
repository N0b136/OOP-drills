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

class Human{
    constructor (name, city, age) {
        this.name = name,
        this.city = city,
        this.age = age
    }

    sayHello() {
        console.log(`Hello! my name is ${this.name}, I am ${this.age}, and I live in ${this.city}.`);
    };
};

let per1 = new Human('Randy', 'Nashville', 47);
per1.sayHello();

class Vehicle {
    constructor(manuf, wheels) {
        this.manufacturer = manuf,
        this.wheels = wheels
    }
    aboutVehicle () {
        console.log(`This Vehicle is a ${this.type}, it was made by ${this.manufacturer}, and it has ${this.wheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor (manuf, wheels, doors, bed) {
        super(manuf, wheels);
        this.type = 'Truck',
        this.doors = doors,
        this.bed = bed
    }
    aboutVehicle () {
        console.log(`This Vehicle is a ${this.type}, it was made by ${this.manufacturer}, and it has ${this.wheels} wheels, ${this.doors} doors, and a bed.`);
    }
}

class Sedan extends Vehicle {
    constructor (manuf, wheels, doors, size, mpg) {
        super(manuf, wheels);
        this.type = 'Sedan',
        this.doors = doors,
        this.size = size,
        this.mpg = mpg
    }
    aboutVehicle () {
        console.log(`This Vehicle is a ${this.type}, it was made by ${this.manufacturer}, and it has ${this.wheels} wheels, and ${this.doors} doors. It is a ${this.size} size sedan, and gets ${this.mpg} miles to the gallon.`);
    }
}

class Motorcycle extends Vehicle {
    constructor (manuf, wheels){
        super(manuf, wheels);
        this.type = 'Motorcycle',
        this.doors = 0,
        this.steering = 'Handlebars'
    }
    aboutVehicle () {
        console.log(`This Vehicle is a ${this.type}, it was made by ${this.manufacturer}, and it has ${this.wheels} wheels, ${this.doors} doors, and is steered with ${this.steering}.`);
    }
}

let myCar = new Sedan ('Toyota', 4, 4, 'medium',28);

myCar.aboutVehicle();

