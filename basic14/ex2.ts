
// Animal1 추상 클래스
abstract class Animal1 { }

class Dog1 extends Animal1 {
    private static dogCount: number = 0; // 모든 Dog1 인스턴스에 공통된 속성

    constructor() {
        super();
        Dog1.incrementDogCount(); // Dog1 인스턴스가 생성될 때마다 카운터 증가
    }

    static incrementDogCount(): void {
        Dog1.dogCount += 1;
    }

    static getDogCount(): number {
        return Dog1.dogCount;
    }

    // Dog1 클래스의 나머지 구현...
    move(): void {
        console.log("Dog1 moving");
    }
}

// Dog1 인스턴스를 몇 개 생성해 봅시다
const myDog = new Dog1();
const yourDog = new Dog1();

// 생성된 Dog1 인스턴스의 수를 출력합니다.
console.log(Dog1.getDogCount()); // 출력: 2
