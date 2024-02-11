// CommonJS 
// const sqlite3 = require("sqlite3").verbose();
// verbose() 메소드를 호출하면, 내부적으로 로깅 메커니즘이 활성화되며, 
// SQL 실행 과정에서 발생하는 세부 정보, 경고, 오류 메시지 등이 더 자세히 표시됌

// ESM 형식으로 sqlite3 모듈 import
import sqlite3 from "sqlite3";
const { verbose } = sqlite3;
const db = new (verbose().Database)("./mydb.sqlite3", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

// SELECT 쿼리 실행
const query1 = `SELECT * FROM user`;
const query2 = `SELECT * FROM post`;
const query3 = `SELECT * FROM comment`;
const queryFun = (query) => {
    if (!query) new Error("query 값은 빈 값이 될 수 없습니다.");
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error("Query execution error: ", err.message);
            return;
        }
        // 조회된 데이터 출력
        console.log(rows);
        // 또는 rows.forEach((row) => console.log(row)); 로 각 행을 반복 출력
    });
};
queryFun(query3);



// 데이터베이스 연결 종료
db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Close the database connection.");
    }
});
