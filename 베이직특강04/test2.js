function myFun(fun) {
    fun();
}

console.log('one');
setTimeout(function () {
    myFun(function () {
        console.log("사용자 정의 함수 인자를 callback을 받게 하고 바로 사용하기");
        myFun(function () {
            console.log("한번 더 바로 사용하기");
        });
    });
}, 1000); // 1초 간격으로 실행
console.log('three');

// depth -> 빈공간 -> 2 depth

