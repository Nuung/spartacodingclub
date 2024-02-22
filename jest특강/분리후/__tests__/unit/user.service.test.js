import { jest } from "@jest/globals";
import { UserService } from "../../user.service.js";

describe("UserService", () => {
    let mockUserRepository;
    let userService;

    beforeEach(() => {
        jest.resetAllMocks();
        mockUserRepository = {
            createUser: jest.fn(),
            findAllUsers: jest.fn(),
            findUserById: jest.fn(),
            updateUser: jest.fn(),
            deleteUser: jest.fn(),
        };
        userService = new UserService(mockUserRepository);
    });

    it("should create a user", async () => {
        const user = { id: "1", name: "Test User" };
        mockUserRepository.createUser.mockResolvedValue(user);
        const result = await userService.createUser(user.id, user.name);

        expect(mockUserRepository.createUser).toHaveBeenCalledWith(user);
        expect(result).toEqual(user);
    });

    it("should get all users", async () => {
        const users = [
            { id: "1", name: "Test User 1" },
            { id: "2", name: "Test User 2" }
        ];
        mockUserRepository.findAllUsers.mockResolvedValue(users);
        const result = await userService.getAllUsers();

        expect(mockUserRepository.findAllUsers).toHaveBeenCalled();
        expect(result).toEqual(users);
    });

    it("should get a user by ID", async () => {
        const user = { id: "1", name: "Test User" };
        mockUserRepository.findUserById.mockResolvedValue(user);
        const result = await userService.getUserById(user.id);

        expect(mockUserRepository.findUserById).toHaveBeenCalledWith(user.id);
        expect(result).toEqual(user);
    });

    it("should return null if user not found on get by ID", async () => {
        mockUserRepository.findUserById.mockResolvedValue(null);
        const result = await userService.getUserById("non-existent");

        expect(result).toBeNull();
    });

    it("should update a user", async () => {
        const user = { id: "1", name: "Updated User" };
        mockUserRepository.findUserById.mockResolvedValue(user);
        mockUserRepository.updateUser.mockResolvedValue(user);
        const result = await userService.updateUser(user.id, user.id, user.name);

        expect(mockUserRepository.updateUser).toHaveBeenCalledWith(user.id, user.id, user.name);
        expect(result).toEqual(user);
    });

    it("should return null when trying to update a non-existent user", async () => {
        mockUserRepository.findUserById.mockResolvedValue(null);
        const result = await userService.updateUser("non-existent", "non-existent", "Non Existent");

        expect(result).toBeNull();
    });

    it("should delete a user", async () => {
        mockUserRepository.findUserById.mockResolvedValue(true); // Assuming the user exists
        mockUserRepository.deleteUser.mockResolvedValue(true);
        const result = await userService.removeUser("1");

        expect(mockUserRepository.deleteUser).toHaveBeenCalledWith("1");
        expect(result).toBe(true);
    });

    it("should return false when trying to delete a non-existent user", async () => {
        mockUserRepository.findUserById.mockResolvedValue(null);
        const result = await userService.removeUser("non-existent");

        expect(result).toBe(false);
    });

});
