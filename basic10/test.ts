class Vehicle {
    make: string;
    constructor(make: string) {
        this.make = make;
    }

    start(): void {
        console.log(`${this.make} is starting`);
    }
}

class Car extends Vehicle {
    model: string;
    constructor(make: string, model: string) {
        super(make); // 부모 클래스의 생성자 호출
        this.model = model;
    }

    displayInfo(): void {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.start(); // Toyota is starting
myCar.displayInfo(); // Make: Toyota, Model: Camry