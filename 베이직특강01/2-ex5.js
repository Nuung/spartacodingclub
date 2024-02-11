class Person {
    constructor(name) {
        this.name = name;
    }
    // john.greet();
    greet() {
        console.log('Hello, ' + this.name + '!');
    }
}

let john = new Person('John');
let bob = new Person('Bob');

john.greet();
bob.greet();