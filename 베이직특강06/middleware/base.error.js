
const baseError = (err, req, res, next) => {
    return res.status(err.statusCode).json({
        success: false,
        data: {
            message: err.message || "서버 내부 오류"
        }
    });
};

export default baseError;