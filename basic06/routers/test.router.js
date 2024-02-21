// test.routers.js
import express from "express";

const router = express.Router();

router.get("/ping", (req, res, next) => {
    res.data = { message: "ok" };
    next();
});

router.get("/test", (req, res, next) => {
    res.data = { message: "test" };
    next();
});

router.get("/err", (req, res, next) => {
    const err = new Error("강제 발생한 에러입니다");
    err.statusCode = 400;
    next(err);
});

export default router;