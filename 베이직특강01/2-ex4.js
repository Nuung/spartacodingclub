// object라는 데이터 타입 요놈을 활용해 봅시다!
// 같은 "목적" 위해 표현하는 "방법" 너무 다양하기 때문 

const log = console.log;
// Person 찍어내는 틀 
// function 1급 객체
// 객체는 Function이다?
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const Person2 = (name, age) => {
    return {
        // instance 변수 
        // instance 마다 다른 값을 가질 수 있으니까 
        "name": name,
        "age": age,
        // "my att": "ttt",
        returnNum: () => { return 99; },
        returnTest: () => {
            return age * 3;
        },
        // newMethod: ()
    }
};

let john = Person2("John", 30);
let bob = Person2("Bob", 99);


// prototype -> 모든 Person 객체가 공유하는 공간
Person2.prototype.greet = function () {
    console.log('Hello, ' + this.name + '!');
}

Person2.prototype.newAtt = "33";

log(john.greet());
log(bob.greet());


// dot literal
// log(bob.my att);
// bracket literal


// log(bob);


// // ES2015, ES6 식 표기법
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log('Hello, ' + this.name + '!');
//     }
// }