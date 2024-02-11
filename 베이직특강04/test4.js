console.log("코드 시작");
let a = 2;

const myPromise = new Promise((resolve, reject) => {
    // 여기에 비동기 함수를 실행하면 된다.
    setTimeout(() => {
        if (a === 2) {
            // a += 1;
            // resolve는 fulfilled 된 상태
            resolve(a); // return 2
        }
        // reject는 rejected 된 상태
        else reject(new Error("a는 1이 아닙니다."));
    }, 3000);
});

myPromise
    .then(value => {
        console.log(value * value); // 4
        return value * value;
    })
    .then(value => {
        console.log(value * value); // 16
        return value * value 
    })
    .then(value => {
        console.log(value * value); // 256
        return new Promise((resolve, reject) => {
            resolve(value);
        })
    })
    .then(newValue => {
        
    })
    .catch(err => {
        console.error(err);
    })
    // 성공 실패 모두 실행하는 finally
    .finally(() => {
        console.log("프로미스 작업 끝!");
    })
console.log("코드 끝"); // 이 값이 출력되는데 걸리는 시간