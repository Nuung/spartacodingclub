
const baseResponse = (req, res, next) => {
    if (res.data) {
        return res.json({
            success: true,
            data: res.data
        });
    }
    next();
};

export default baseResponse;