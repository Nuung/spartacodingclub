const log = console.log;
// const arr = [1, 2, "5", true]; // 2
// const arr2 = new Array(1, 2, 3, "&7");

// for i loop
// for (let i = 0; i < arr.length; i++) {
//     log(arr[i]);
// }


// 조건문 = 데이터 타입이 무조건 불리언, 조건 덩어리
// const a = (1 === 2) || (1 === 1) && ("a" === "b");
// const b = 99;
// log(b, typeof (b)); // 0 - X // 99, 1 - O
// // 숫자에서 0만 false 그 외 모두 true
// log(Boolean(b), typeof (Boolean(b))); // 강제 형변환 (데이터 타입을 바꾼다)

// // boolean -> js 자체적으로 Cating "형변환" - boolean
// if (b) {
//     log("test");
// }