const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const router = express.Router();
const port = 3000;

router.get("/ping", (req, res) => {
    return res.status(200).json({ "message": "ok" });
});

router.post("/test", (req, res) => {
    const { one, two } = req.body;
    return res.status(200).json({ "message": `${one}, ${two}` });
});

app.use("/api", router);
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
