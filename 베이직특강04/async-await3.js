console.log("코드 시작");
const wait = async (count, value) => {
    setTimeout(() => {
        console.log(value); // a
    }, count);
};

const a = async () => {
    await wait(1000, "a"); // 1초 기다린다
    return "return a";
};

const b = async () => {
    await wait(1000, "b");
    return "return b";
};

const c = async () => {
    await wait(1000, "c");
    return "return c";
};

// c 라는 값이 찍힐때까지 최소 1초

const main = () => {
    return Promise.all([a(), b(), c()]).then((results => results.join(" ")));
};
main().then(console.log);

// console.log(a()); // Promise { <pending> } - 
// await가 붙으면 Promise가 reslove 될 때 까지 기다린다
// await가 안 붙어있으면? 그냥 바로 다음 줄 실행한다~ Pass 한다 
// console.log("코드끝");