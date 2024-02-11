const fs = require("fs");

// 동기적으로 파일 읽기
const data = fs.readFileSync("example.txt", { encoding: "utf8", flag: "r" });
console.log(data);
// // 비동기적으로 파일 읽기
// fs.readFile("example.txt", { encoding: "utf8", flag: "r" }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// 동기적으로 파일 쓰기
// fs.writeFileSync("example.txt", "Hello, World!", { encoding: "utf8" });
// // 비동기적으로 파일 쓰기
// fs.writeFile("example.txt", "Hello, World!", { encoding: "utf8" }, (err) => {
//     if (err) throw err;
//     console.log("File has been saved!");
// });
