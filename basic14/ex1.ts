// Creature 추상 클래스
abstract class Creature {
}

// Animal 추상 클래스
abstract class Animal extends Creature {
    species(): void {
        console.log("This is an animal");
    }
}

// Fish 추상 클래스
abstract class Fish extends Creature {
    species(): void {
        console.log("This is a fish");
    }
}

// Flyable 인터페이스
interface Flyable {
    fly(): void;
}

// Talkable 인터페이스
interface Talkable {
    talk(): void;
}

// Swimmable 인터페이스
interface Swimmable {
    swim(): void;
}

// Parrot 클래스
class Parrot extends Animal implements Flyable, Talkable {
    fly(): void {
        console.log("Parrot flying");
    }

    talk(): void {
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
class Whale extends Fish implements Swimmable {
    swim(): void {
        console.log("Whale swimming");
    }
}

// Shark 클래스
class Shark extends Fish implements Swimmable {
    swim(): void {
        console.log("Shark swimming");
    }
}

// 예제 사용
const parrot = new Parrot();
parrot.fly();  // "Parrot flying"
parrot.talk(); // "Parrot talking"

const whale = new Whale();
whale.swim();  // "Whale swimming"
