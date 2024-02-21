// const myPromise = new Promise((resolve, reject) => {
//     // 여기에 비동기 함수를 실행하면 된다.
//     setTimeout(() => {
//         if (a === 2) {
//             // a += 1;
//             // resolve는 fulfilled 된 상태
//             resolve(a); // return 2
//         }
//         // reject는 rejected 된 상태
//         else reject(new Error("a는 1이 아닙니다."));
//     }, 3000);
// });

const newMyPromise = async () => {
    setTimeout(() => {
        console.log(a);
    }, 3000);
};