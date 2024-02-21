
export default (req, res, next) => {
    if (res.data) {
        const date = new Date();
        res.set("X-API-END", date.toISOString());
        res.set("X-API-Latency", (date - res["api-start-time"]) / 1000);

        return res.json({
            success: true,
            data: res.data
        });
    }
    return next();
};