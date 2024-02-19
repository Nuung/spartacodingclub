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

async function getAllPosts(page, pageSize) {
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const posts = await prisma.post.findMany({
        skip,
        take,
        orderBy: {
            created_at: 'desc', // 가장 최근에 생성된 포스트부터 가져오기
        },
    });

    return posts;
};

app.get("/api/posts", async (req, res, next) => {
    let { page, pageSize } = req.query;
    page = parseInt(page) || 1;
    pageSize = parseInt(pageSize) || 5;

    const posts = await getAllPosts(page, pageSize)
    return res.status(200).json({ message: posts });
});