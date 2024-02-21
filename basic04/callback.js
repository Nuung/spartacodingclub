// const myFun = (fun) => { fun(); };
// const myFun2 = () => {
//     console.log("사용자 정의 함수 인자를 callback을 받게 하고 바로 사용하기");
//     myFun(function () {
//         console.log("한번 더 바로 사용하기");
//     });
// };

// console.log('one');
// setInterval(function () {
//     myFun(myFun2);
// }, 1000); // 1초 간격으로 실행
// console.log('three');



const myFun = () => {
    return new Promise((resolve, reject) => {
        resolve("myFun 실행!");
    });
};

console.log('one');
setInterval(() => {
    myFun()
        .then(value => console.log(value))
        .then(value => myFun().then(value => console.log(`${value}, 한번 더 실행`)));
}, 1000);
console.log('three');
