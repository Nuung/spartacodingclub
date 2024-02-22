import { jest } from "@jest/globals";
import { UserController } from "../../user.controller";

describe("UserController", () => {
    let mockUserService;
    let userController;
    let mockReq, mockRes;

    beforeEach(() => {
        jest.resetAllMocks();
        mockUserService = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            updateUser: jest.fn(),
            removeUser: jest.fn(),
        };
        mockReq = { params: {}, body: {} };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            cookie: jest.fn().mockReturnThis(),
        };
        userController = new UserController(mockUserService);
    });

    it("should create a user and return 201 status", async () => {
        const user = { id: "1", name: "Test User" };
        mockReq.body = user;
        mockUserService.createUser.mockResolvedValue(user);

        await userController.createUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.json).toHaveBeenCalledWith(user);
        expect(mockUserService.createUser).toHaveBeenCalledWith(user.id, user.name);
    });

    it("should return all users", async () => {
        const users = [{ id: "1", name: "Test User 1" }, { id: "2", name: "Test User 2" }];
        mockUserService.getAllUsers.mockResolvedValue(users);

        await userController.getAllUsers(mockReq, mockRes);

        expect(mockRes.json).toHaveBeenCalledWith(users);
        expect(mockUserService.getAllUsers).toHaveBeenCalled();
    });

    it("should return a user by ID", async () => {
        const user = { id: "1", name: "Test User" };
        mockReq.params.id = user.id;
        mockUserService.getUserById.mockResolvedValue(user);

        await userController.getUserById(mockReq, mockRes);

        expect(mockRes.json).toHaveBeenCalledWith(user);
        expect(mockUserService.getUserById).toHaveBeenCalledWith(user.id);
    });

    it("should return 400 if user not found by ID", async () => {
        mockReq.params.id = "non-existent";
        mockUserService.getUserById.mockResolvedValue(null);

        await userController.getUserById(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ error: "User not found" });
    });

    it("should update a user", async () => {
        const updatedUser = { id: "1", name: "Updated Name" };
        mockReq.params.id = updatedUser.id;
        mockReq.body = { id: updatedUser.id, name: updatedUser.name };
        mockUserService.updateUser.mockResolvedValue(updatedUser);

        await userController.updateUser(mockReq, mockRes);

        expect(mockRes.json).toHaveBeenCalledWith(updatedUser);
        expect(mockUserService.updateUser).toHaveBeenCalledWith(updatedUser.id, updatedUser.id, updatedUser.name);
    });

    it("should return 400 if update user not found", async () => {
        mockReq.params.id = "non-existent";
        mockReq.body = { id: "non-existent", name: "Some Name" };
        mockUserService.updateUser.mockResolvedValue(null);

        await userController.updateUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ error: "User not found" });
    });

    it("should delete a user", async () => {
        mockReq.params.id = "1";
        mockUserService.removeUser.mockResolvedValue(true);

        await userController.deleteUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(204);
        expect(mockUserService.removeUser).toHaveBeenCalledWith(mockReq.params.id);
    });

    // ============================================================ //
    // 2차 업데이트 이후
    // ============================================================ //

    it("should return 400 if delete user not found", async () => {
        mockReq.params.id = "non-existent";
        mockUserService.removeUser.mockResolvedValue(false);

        await userController.deleteUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ error: "User not found" });
    });

    it("should return 400 if createUser is called with invalid data", async () => {
        // ID 또는 이름이 누락된 경우
        mockReq.body = {};
        await userController.createUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({ error: expect.any(String) }));
    });

    it("should return 400 if updateUser is called with invalid data", async () => {
        // 업데이트할 사용자 정보가 유효하지 않은 경우
        mockReq.params.id = "1";
        mockReq.body = {};
        await userController.updateUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({ error: "업데이트 할 내용이 없습니다." }));
    });

    it("should handle exceptions thrown by userService methods", async () => {
        // UserService에서 예외가 발생한 경우
        const errorMessage = "An error occurred";
        mockUserService.createUser.mockRejectedValue(new Error(errorMessage));
        mockReq.body = { id: "1", name: "Test User" };

        await userController.createUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ error: errorMessage });
    });

});
