import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, () => {
    console.log(PORT, "포트로 서버가 열렸어요!");
});

app.get("/ping", (req, res, next) => {
    return res.status(200).json({ message: "ok" });
});