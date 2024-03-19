class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge < 0) {
      console.error('Age cannot be negative.');
    } else {
      this._age = newAge;
    }
  }
}

const person = new Person(30);
console.log(person.age); // 30

person.age = 25; // setter 호출, 값 변경
console.log(person.age); // 25

person.age = -1; // "Age cannot be negative." 출력, 값 변경 거부
