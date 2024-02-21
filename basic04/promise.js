console.log("코드 시작");
let a = 1;
const myPromise = new Promise((resolve, reject) => {
    // 여기에 비동기 함수를 실행하면 된다.
    setTimeout(() => {
        if (a === 1) {
            a += 1;
            // resolve는 fulfilled 된 상태
            resolve(a);
        }
        // reject는 rejected 된 상태
        else reject(new Error("a는 1이 아닙니다."));
    }, 2000);
});
myPromise.then(value => {
    console.log(value);
});
console.log("코드 끝");

// myPromise
//     .then(value => {
//         console.log(value);
//         return value;
//     })
//     .then(value => {
//         console.log(value * value);
//         return value * value;
//     })
//     .then(value => {
//         console.log(value * value);
//         return value * value;
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             // 여기에 비동기 함수를 실행하면 된다.
//             setTimeout(() => {
//                 resolve(value * value);
//             }, 2000);
//         });
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(err => {
//         console.error(err);
//     })
//     // 성공 실패 모두 실행하는 finally
//     .finally(() => {
//         console.log("모든 작업 끝!");
//     })
// console.log("코드 끝");