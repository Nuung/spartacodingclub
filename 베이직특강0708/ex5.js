import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getAverageCommentCount() {
    // 먼저 모든 게시물에 대한 댓글 수를 집계
    const commentsPerPost = await prisma.comment.groupBy({
        by: ['post_id'],
        _count: {
            comment_id: true,
        },
    });

    // 집계된 결과에서 댓글 수의 평균을 계산
    const totalComments = commentsPerPost.reduce((acc, { _count }) => acc + _count.comment_id, 0);
    const averageComments = commentsPerPost.length > 0 ? totalComments / commentsPerPost.length : 0;

    console.log(`Average comment count per post: ${averageComments}`);
    return averageComments;
}

getAverageCommentCount()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
