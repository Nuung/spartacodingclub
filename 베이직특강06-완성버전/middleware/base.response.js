
export default (req, res) => {
    return res.json({
        success: true,
        data: res.data
    });
};