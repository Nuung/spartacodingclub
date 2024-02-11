// 자바스크립 

// document.getElementById("myDiv").addEventListener("click", () => {

// });

// console.log('one');
// console.log('two');
// console.log('three');

// ------------------------------------------------------------------ //
console.log('one');
setTimeout(function () {
    console.log('two');
}, 1000);
console.log('three');

// 1. callback 2. promise 3. async & await

// const myFun = (fun) => { fun(); };
// 함수를 정의할때 괄호안에 쓰는 변수 -> 파라미터라고 부름 parameter
// 파라미터는 "함수여야 한다" -> callback 함수의 자리다!
function myFun(fun) {
    fun();
}

function output() {
    console.log("test");
}

// 함수를 사용할때 괄호 안에 들어가는 값 -> 인자, argument
myFun(output);