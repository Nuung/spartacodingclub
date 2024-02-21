// app.js 만들기
import express from "express";
import bodyParser from "body-parser";
import testRouter from "./routers/test.router.js";
import baseResponse from "./middleware/base.response.js";
import baseError from "./middleware/base.error.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, () => {
    console.log(PORT, "포트로 서버가 열렸어요!");
});

// get 2개 (이상)
// 2번째 자리에 함수가 <- callback
// 3개(이상) <- express가 넘겨줌

const hello = (req, res, next) => {
    res.data = "hello";
    next();
};

app.get("/", hello, (req, res, next) => {
    return res.send(res.data);
});

app.get("/ping", (req, res, next) => {
    return res.status(200).json({ message: "ok" });
});

app.use("/api", testRouter);
app.use(baseResponse, baseError);

