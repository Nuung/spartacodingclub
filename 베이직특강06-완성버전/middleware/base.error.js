
export default (err, req, res, next) => {
    const date = new Date();
    res.set("X-API-END", date.toISOString());
    res.set("X-API-Latency", (date - res["api-start-time"]) / 1000);

    // 에러 응답을 보냄
    return res.status(err.statusCode || 500).json({
        success: false,
        data: { message: err.message || "서버 내부 오류가 발생했습니다." }
    });
};