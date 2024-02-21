const a = 2;
console.log("프로그램 코드 시작");

// myPromise라는 변수는 promise instance
// 선언하는 부분 producer 프로듀서
const myPromise = new Promise((resolve, reject) => {
    console.log("프로미스 생성!");
    if (a === 1)
        resolve(a); // return a 
    else
        reject(new Error("a가 1이 아닙니다!")); // 에러 상황임을 알리는 것 
});

// 사용하는 부분 consumer 컨슈머
// then 이 받는 것은 진동벨이 울린 것
// 진동벨이 언제 울리냐면? resolve(a) 호출했을 때 
myPromise
    .then(apple => {
        console.log(apple);
    })
    .catch(banana => {
        console.log(banana.message);
    })

console.log("프로그램 코드 끝");