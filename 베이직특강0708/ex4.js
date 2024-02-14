import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

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

async function main() {
    // const newUser = await prisma.user.create({
    //     data: {
    //         username: "AliceTest",
    //         email: "alice-test@example.com",
    //     },
    // })
    // return newUser;
    return await getAllComments();
};


main()
    .then(result => console.log(result))
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
