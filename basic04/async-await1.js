console.log("코드 시작");
let a = 1;
const myPromise = async () => {
    setTimeout(() => {
        if (a === 1) {
            a += 1;
            console.log(`${a} 리턴 합니다!`)
            return a;
        }
        // reject는 rejected 된 상태
        else return new Error("a는 1이 아닙니다.");
    }, 2000);
};
const b = await myPromise();
console.log("코드 끝");



