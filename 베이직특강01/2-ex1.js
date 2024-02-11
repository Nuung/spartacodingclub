const log = console.log;
// const a = 3; // number - 숫자
// log(typeof (a));

// const b = "test"; // string - 문자열
// log(typeof (b));

// const c = true; // boolean - 불리언
// log(typeof (c));

// let d;
// log(typeof (d));

// const myObject = {
//     one: "one",
// };

// const test = new myObject();
// log(test);

class MyClass {
    // 생성자
    constructor(param1, param2) {
        // instace 변수
        this.property1 = param1;
        this.property2 = param2;
    }
}

const a = new MyClass("one", "two");
log(typeof (a));
log(a);

const MyClass2 = (param1, param2) => {
    return {
        property1: param2,
        property2: param1,
    }
};
const b = MyClass2("one", "two");
log(typeof (b));
log(b);

// class -> 붕어빵틀
// object (객체) -> 붕어빵 틀로 만들어질 것들 (가상 존재)
// instance -> 붕어빵 틀로 만들어진 진짜 붕어빵 (실제 물리적인 존재) -> 주기억장치, 메모리에 올라가는 순간

// const arr = [1, 2, "5", true];
// const arr2 = new Array(1, 2, 3, "&7");
// log(typeof (arr));
// log(typeof (arr2));