class Vehicle {
    constructor(make) {
        this.make = make;
    }

    start() {
        console.log(`${this.make} is starting`);
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        // instance - 멤버변수
        super(make); // 부모 클래스의 생성자 호출 - 내가 상속받고 있는 그 class의 생성자 호출
        this.model = model;
    }

    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}
// "instance" - ㄱ구현이 된 상태 -> 주기억장치에 올라간 
// myCar 변수는 Car 라는 Class의 instance
const myCar = new Car("Toyota", "Camry");
myCar.start();