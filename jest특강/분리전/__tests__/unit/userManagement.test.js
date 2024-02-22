import { jest } from "@jest/globals";
import { UserManagement } from "../../app.js";

describe("UserManagement", () => {

    // 사전에 필요한 mock 데이터 세팅
    let mockReq;
    let mockRes;
    let userManagement;

    beforeEach(() => {
        jest.resetAllMocks();
        // 각 테스트 실행 전에 mock 객체를 초기화합니다.
        mockReq = { params: {}, body: {} };
        mockRes = {
            status: jest.fn().mockReturnThis(), // status 메서드가 this를 반환하도록 수정
            json: jest.fn().mockReturnThis(), // json 메서드도 체이닝을 위해 this를 반환하도록 수정
            cookie: jest.fn().mockReturnThis(),
        };
        userManagement = new UserManagement();
    });

    it("should create a user", async () => {
        mockReq.body = { id: "1", name: "John Doe" };
        await userManagement.createUser(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.json).toHaveBeenCalledWith(mockReq.body);
        expect(userManagement.users).toHaveLength(1);
        expect(userManagement.users[0]).toEqual(mockReq.body);
    });

    it("should return all users", async () => {
        const mockUsers = [{ id: "1", name: "John Doe" }, { id: "2", name: "Jane Doe" }];
        userManagement.users = mockUsers;
        await userManagement.findAllUsers(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockUsers);
    });

    it("should find a user by ID", async () => {
        const user = { id: "1", name: "John Doe" };
        userManagement.users.push(user);
        mockReq.params.id = "1";

        await userManagement.findUserById(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(user);
        expect(userManagement.users[0].name).toBe("John Doe");
    });

    it("should return 404 if user not found when finding a user", async () => {
        mockReq.params.id = "2";
        await userManagement.findUserById(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ error: "User not found" });
    });

    it("should update a user", async () => {
        const user = { id: "1", name: "John Doe" };
        userManagement.users.push(user);
        mockReq.params.id = "1";
        mockReq.body = { id: "1", name: "John Updated" };

        await userManagement.updateUser(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockReq.body);
        expect(userManagement.users[0].name).toBe("John Updated");
    });

    it("should delete a user", async () => {
        const user = { id: "1", name: "John Doe" };
        userManagement.users.push(user);
        mockReq.params.id = "1";
        await userManagement.deleteUser(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(204);
        expect(userManagement.users).toHaveLength(0);
    });

    // ============================================================ //
    // 2차 업데이트 이후
    // ============================================================ //
    // it("should return 422 if req body are empty when creating a user", async () => {
    //     mockReq.body = { id: "1" };
    //     await userManagement.createUser(mockReq, mockRes);
    //     expect(mockRes.status).toHaveBeenCalledWith(422);
    //     expect(mockRes.json).toHaveBeenCalledWith({ error: "ID와 이름은 필수입니다." });

    //     mockReq.body = { name: "test" };
    //     await userManagement.createUser(mockReq, mockRes);
    //     expect(mockRes.status).toHaveBeenCalledWith(422);
    //     expect(mockRes.json).toHaveBeenCalledWith({ error: "ID와 이름은 필수입니다." });
    // });

    // it("should return 404 if user not found when updating a user", async () => {
    //     mockReq.params.id = "2";
    //     await userManagement.updateUser(mockReq, mockRes);
    //     expect(mockRes.status).toHaveBeenCalledWith(404);
    //     expect(mockRes.json).toHaveBeenCalledWith({ error: "User not found" });
    // });

    // it("should return 404 if user not found when deleting a user", async () => {
    //     mockReq.params.id = "2";
    //     await userManagement.deleteUser(mockReq, mockRes);
    //     expect(mockRes.status).toHaveBeenCalledWith(404);
    //     expect(mockRes.json).toHaveBeenCalledWith({ error: "User not found" });
    // });
});
