// app.js 만들기
import express from "express";
import bodyParser from "body-parser";
import testRouter from "./routers/test.routers.js";
import baseResponse from "./middleware/base.response.js";
import baseError from "./middleware/base.error.js";
import baseRes from "./middleware/base.res.js";
import baseStartMiddleware from "./middleware/base.start.middleware.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, () => {
    console.log(PORT, "포트로 서버가 열렸어요!");
});

// app.get("/", function (req, res) {
//     return res.status(200).send("Hello World!");
// });

// ====================================================== //
// API
// ====================================================== //

const router = express.Router();
router.get("/ping", (req, res) => {
    return res.status(200).json({ message: "ok" });
});
app.use(router);

// app.use("/api", testRouter);
// app.use("/api", [testRouter, baseResponse]);
// app.use("/api", [testRouter, baseError]);
// app.use("/api", [testRouter, baseRes, baseError]);

// 이렇게 나누면 역할을 나누면서 전역적으로 사용할 수 있다.
app.use(baseStartMiddleware);
app.use("/api", testRouter);
app.use([baseRes, baseError]);

