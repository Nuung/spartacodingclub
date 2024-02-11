import express from "express";

const router = express.Router();

// router.get("/ping", (req, res) => {
//     return res.status(200).json({ message: "ok" });
// });

router.get("/ping", (req, res, next) => {
    res.data = { message: "ok" };
    return next();
});

router.get("/err", (req, res, next) => {
    // res.data = { message: "ok" };
    // return next();
    const err = new Error("의도적인 에러 발생");
    err.statusCode = 400; // HTTP 상태 코드 설정
    return next(err); // 에러 처리 미들웨어로 이동
});

export default router;ing
