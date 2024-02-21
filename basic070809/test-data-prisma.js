import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // 사용자 데이터 삽입
    const users = [
        { username: 'Alice', email: 'alice@example.com', created_at: new Date('2023-07-22') },
        { username: 'Bob', email: 'bob@example.com', created_at: new Date('2023-03-09') },
        { username: 'Charlie', email: 'charlie@example.com', created_at: new Date('2023-09-08') },
        { username: 'Dave', email: 'dave@example.com', created_at: new Date('2023-08-02') },
        { username: 'Eve', email: 'eve@example.com', created_at: new Date('2023-10-30') },
        { username: 'Frank', email: 'frank@example.com', created_at: new Date('2023-06-15') },
        { username: 'Grace', email: 'grace@example.com', created_at: new Date('2023-05-20') },
        { username: 'Hannah', email: 'hannah@example.com', created_at: new Date('2023-12-01') },
    ];

    // createMany 메소드는 Prisma 2.16.0 이상에서 사용할 수 있음
    // 모든 데이터베이스가 createMany를 지원하는 것은 아니므로, 사용하려는 데이터베이스가 이 기능을 지원하는지 확인필요
    // SQLite는 지원안함 ㅎ
    // const userCreateManyResult = await prisma.user.createMany({
    //     data: users,
    //     skipDuplicates: true, // 중복 데이터를 스킵하도록 설정
    // });
    // console.log(userCreateManyResult);

    for (const user of users) {
        await prisma.user.create({ data: user });
    }

    // 게시글 데이터 삽입
    const posts = [
        { user_id: 1, title: 'Alice의 독서록', content: 'Alice의 독서록에 대한 내용입니다.', created_at: new Date('2023-11-01') },
        { user_id: 1, title: 'Alice의 프로그래밍 팁', content: 'Alice의 프로그래밍 팁에 대한 내용입니다.', created_at: new Date('2023-12-19') },
        { user_id: 1, title: 'Alice의 첫 게시글', content: 'Alice의 첫 게시글에 대한 내용입니다.', created_at: new Date('2023-02-24') },
        { user_id: 2, title: 'Bob의 독서록', content: 'Bob의 독서록에 대한 내용입니다.', created_at: new Date('2023-01-08') },
        { user_id: 2, title: 'Bob의 첫 게시글', content: 'Bob의 첫 게시글에 대한 내용입니다.', created_at: new Date('2023-03-30') },
        { user_id: 3, title: 'Charlie의 요리 레시피', content: 'Charlie의 요리 레시피에 대한 내용입니다.', created_at: new Date('2023-04-15') },
        { user_id: 4, title: 'Dave의 일상', content: 'Dave의 일상에 대한 내용입니다.', created_at: new Date('2023-07-03') },
        { user_id: 5, title: 'Eve의 독서록', content: 'Eve의 독서록에 대한 내용입니다.', created_at: new Date('2023-09-21') },
        { user_id: 6, title: 'Frank의 영화 리뷰', content: 'Frank의 영화 리뷰에 대한 내용입니다.', created_at: new Date('2023-02-11') },
        { user_id: 7, title: 'Grace의 운동 일지', content: 'Grace의 운동 일지에 대한 내용입니다.', created_at: new Date('2023-05-29') },
        { user_id: 8, title: 'Hannah의 프로그래밍 팁', content: 'Hannah의 프로그래밍 팁에 대한 내용입니다.', created_at: new Date('2023-08-19') },
    ];

    // const postCreateManyResult = await prisma.post.createMany({
    //     data: posts,
    //     skipDuplicates: true, // 중복 데이터를 스킵하도록 설정
    // });
    // console.log(postCreateManyResult);
    for (const post of posts) {
        await prisma.post.create({ data: post });
    }

    // 댓글 데이터 삽입
    const comments = [
        { post_id: 1, user_id: 2, comment: '잘 보고 갑니다.', created_at: new Date('2023-08-14') },
        { post_id: 1, user_id: 7, comment: '정말 재미있어 보여요!', created_at: new Date('2023-04-12') },
        { post_id: 2, user_id: 7, comment: '재미있게 읽었습니다.', created_at: new Date('2023-11-05') },
        { post_id: 3, user_id: 5, comment: '잘 보고 갑니다.', created_at: new Date('2023-02-22') },
        { post_id: 4, user_id: 3, comment: '응원합니다!', created_at: new Date('2023-03-17') },
        { post_id: 5, user_id: 4, comment: 'Eve, 이 책 저도 읽어봤어요. 정말 좋더라고요!', created_at: new Date('2023-09-25') },
        { post_id: 6, user_id: 1, comment: 'Frank, 영화 리뷰 잘 보았습니다. 추천해주실만한가요?', created_at: new Date('2023-02-13') },
        { post_id: 7, user_id: 2, comment: 'Grace의 운동 일지 정말 도움이 많이 되네요. 감사합니다!', created_at: new Date('2023-06-01') },
        { post_id: 8, user_id: 3, comment: 'Hannah, 프로그래밍 팁 잘 읽었습니다. 다음 팁도 기대할게요!', created_at: new Date('2023-08-21') },
        { post_id: 3, user_id: 6, comment: 'Charlie, 요리 레시피 너무 맛있어 보여요. 시도해볼게요!', created_at: new Date('2023-04-17') },
        { post_id: 4, user_id: 5, comment: 'Dave의 일상이 재미있네요. 더 많은 이야기 기대합니다.', created_at: new Date('2023-07-05') },
    ];

    // const commentCreateManyResult = await prisma.comment.createMany({
    //     data: comments,
    //     skipDuplicates: true, // 중복 데이터를 스킵하도록 설정
    // });
    // console.log(commentCreateManyResult);
    for (const comment of comments) {
        await prisma.comment.create({ data: comment });
    }
};

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
