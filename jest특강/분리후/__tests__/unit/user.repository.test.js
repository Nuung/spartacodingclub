import { UserRepository } from "../../user.repository.js";

describe("UserRepository", () => {
    let userRepository;

    beforeEach(() => {
        userRepository = new UserRepository();
    });

    it("should create and find a user", async () => {
        const user = { id: "1", name: "Test User" };
        await userRepository.createUser(user);

        const foundUser = await userRepository.findUserById(user.id);
        expect(foundUser).toEqual(user);
    });

    it("should return all users", async () => {
        const user1 = { id: "1", name: "Test User 1" };
        const user2 = { id: "2", name: "Test User 2" };
        await userRepository.createUser(user1);
        await userRepository.createUser(user2);

        const users = await userRepository.findAllUsers();
        expect(users).toEqual(expect.arrayContaining([user1, user2]));
        expect(users.length).toBe(2);
    });

    it("should update a user", async () => {
        const user = { id: "1", name: "Original Name" };
        await userRepository.createUser(user);

        const updatedName = "Updated Name";
        const updatedUser = await userRepository.updateUser(user.id, user.id, updatedName);
        expect(updatedUser).toEqual({ id: user.id, name: updatedName });

        const foundUser = await userRepository.findUserById(user.id);
        expect(foundUser.name).toBe(updatedName);
    });

    it("should delete a user", async () => {
        const user = { id: "1", name: "Test User" };
        await userRepository.createUser(user);

        const isDeleted = await userRepository.deleteUser(user.id);
        expect(isDeleted).toBe(true);
        expect(await userRepository.findUserById(user.id)).toBeUndefined();
    });

    it("should return null when updating a non-existent user", async () => {
        const updateResult = await userRepository.updateUser("non-existent", "non-existent", "Non Existent");
        expect(updateResult).toBeNull();
    });

    it("should return false when deleting a non-existent user", async () => {
        const deleteResult = await userRepository.deleteUser("non-existent");
        expect(deleteResult).toBe(false);
    });
});
