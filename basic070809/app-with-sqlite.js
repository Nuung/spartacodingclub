import express from "express";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
const { verbose } = sqlite3;

// DBMS - System -> S/W -> server -> 연결해야댐
const db = new (verbose().Database)("./prisma/mydb.sqlite3", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, () => {
    console.log(PORT, "포트로 서버가 열렸어요!");
});

// method 
// express HTTP GET API

app.get("/ping", (req, res, next) => {
    return res.status(200).json({ message: "ok" });
});

app.get("/users", (req, res, next) => {
    const query = `
        SELECT *
        FROM user
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error("Query execution error: ", err.message);
            return;
        }
        // 조회된 데이터 출력
        // console.log(rows);
        // 또는 rows.forEach((row) => console.log(row)); 로 각 행을 반복 출력
        return res.status(200).json({ message: rows });
    });
});

app.get("/test/:postId", (req, res, next) => {
    const { postId } = req.params;

    const query = `
        SELECT *
        FROM post
        INNER JOIN comment
        ON post.post_id = comment.post_id
        WHERE post.post_id = ${postId};
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error("Query execution error: ", err.message);
            return;
        }
        // 조회된 데이터 출력
        // console.log(rows);
        // 또는 rows.forEach((row) => console.log(row)); 로 각 행을 반복 출력
        return res.status(200).json({ message: rows });
    });
});