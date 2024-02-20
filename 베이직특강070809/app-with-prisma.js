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
    // 2, 10
    const skip = (page - 1) * pageSize; // 10
    const take = pageSize; // 10
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
    page = parseInt(page) || 1; // nullish - 널병합 연산자 (21)
    pageSize = parseInt(pageSize) || 5;

    const posts = await getAllPosts(page, pageSize)
    return res.status(200).json({ message: posts });
});

// 1000 개 의 post 끝난 다음에
// 22번째 post 수정하면?

// 공유 LOCK 부작용
// 1000 개 의 post 끝난 다음에 수정이 가능하다
// 느려진다
// 누군가가 많이 가져오면 올 수록 딜레이가 늘어나죠?
// 뒷 사람은 계속 기다려야해
// network timeout 50 - 1분 - 초과해서 기다리면? 500을 받음 timeout 이라고 