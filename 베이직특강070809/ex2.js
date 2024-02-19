import { appendFileSync } from "fs";

// 동기적으로 파일 읽기
// const data = fs.readFileSync("example.txt", { encoding: "utf8", flag: "r" });
// // 비동기적으로 파일 읽기
// fs.readFile("example.txt", { encoding: "utf8", flag: "r" }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// 동기적으로 파일 쓰기
appendFileSync("example.txt", "홍길동, 3000\n", { encoding: "utf8" });
appendFileSync("example.txt", "홍길동, 1000\n", { encoding: "utf8" });
appendFileSync("example.txt", "정현우, 2000\n", { encoding: "utf8" });
appendFileSync("example.txt", "정현우, 9000\n", { encoding: "utf8" });
appendFileSync("example.txt", "동길홍, 12000\n", { encoding: "utf8" });