"use strict";
// Creature 추상 클래스
class Creature {
}
// Animal 추상 클래스
class Animal extends Creature {
    species() {
        console.log("This is an animal");
    }
}
// Fish 추상 클래스
class Fish extends Creature {
    species() {
        console.log("This is a fish");
    }
}
// Parrot 클래스
class Parrot extends Animal {
    fly() {
        console.log("Parrot flying");
    }
    talk() {
        console.log("Parrot talking");
    }
}
// Dog 클래스
class Dog extends Animal {
}
// Cat 클래스
class Cat extends Animal {
}
// Whale 클래스
class Whale extends Fish {
    swim() {
        console.log("Whale swimming");
    }
}
// Shark 클래스
class Shark extends Fish {
    swim() {
        console.log("Shark swimming");
    }
}
// 예제 사용
const parrot = new Parrot();
parrot.fly(); // "Parrot flying"
parrot.talk(); // "Parrot talking"
const whale = new Whale();
whale.swim(); // "Whale swimming"
