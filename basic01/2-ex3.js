const log = console.log;
// // [ forEach vs for loop ]
// const arr = [1, 2, "5", true]; // 2
const arr2 = new Array(1, 2, 3, "&7");
// for (let i = 0; i < arr.length; i++) {
//     log(arr[i]);
// }

arr2.forEach((a) => log(a));
// object에서 점 -> "dot literal"
// object가 가지고 있는 "Attribute" (속성) 접근하는 것 - method도 포함 
arr2.push("asdads");
log(arr2);


// function vs method 차이점!
// method는 function의 부분집합
// 객체 안에서 선언이 되는 함수를 메서드라고 불러요
// class 안에서 선언이 되는 함수를 메서드라고 불러요


class MyClass {
    // 생성자
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    // class가 가지고 있는 Function method
    myMethod() {
        return 3;
    }
}

const my = new MyClass("one", "two"); // MyClass의 instance이다.
log(my.myMethod());