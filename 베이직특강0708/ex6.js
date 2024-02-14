import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getCommentCountsPerPost() {
    // 게시물별로 댓글 수를 집계합니다.
    const rawCommentCounts = await prisma.post.findMany({
        select: {
            post_id: true,
            _count: {
                select: {
                    comments: true,
                },
            },
        },
    });

    // 쿼리 결과에서 _count 키를 counts로 변경합니다.
    const commentCounts = rawCommentCounts.map(({ post_id, _count }) => ({
        post_id,
        counts: _count.comments,
    }));

    console.log(commentCounts);
    return commentCounts;

}

getCommentCountsPerPost()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
