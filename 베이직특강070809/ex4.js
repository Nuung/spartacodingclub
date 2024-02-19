import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});


async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
};

async function getAllPosts() {
    const posts = await prisma.post.findMany();
    return posts;
};

async function getAllComments() {
    const comments = await prisma.comment.findMany();
    return comments;
};

async function getAllPostsWithComments() {
    const postsWithComments = await prisma.post.findMany({
        include: {
            user: true,
            comments: true,
        },
    });

    return postsWithComments;
};

async function getUserPostsAndComments(userId) {
    const userWithPostsAndComments = await prisma.user.findUnique({
        where: {
            user_id: userId,
        },
        include: {
            posts: true, // 모든 게시물 정보 포함
            comments: {
                include: {
                    post: true, // 댓글이 달린 게시물 정보 포함
                },
            },
        },
    });
    return userWithPostsAndComments;
}



async function main() {
    // const newUser = await prisma.user.create({
    //     data: {
    //         username: "AliceTest",
    //         email: "alice-test@example.com",
    //     },
    // })
    // return newUser;
    // return await getAllComments();
    return await getAllPostsWithComments();
};


main()
    .then(result => console.log(result))
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
