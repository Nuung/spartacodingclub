
export default (req, res, next) => {
    const date = new Date();
    res.set("X-API-START", date.toISOString());
    res["api-start-time"] = date;
    return next();
};