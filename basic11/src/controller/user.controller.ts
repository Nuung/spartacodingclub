// userController.ts
import { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id, name } = req.body;
            if (!id || !name) {
                throw new Error("ID와 이름은 필수입니다.");
            }
            const user = await this.userService.createUser(id, name);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                // 오류가 Error 객체가 아닌 경우의 처리
                res.status(500).json({ error: "An unknown error occurred" });
            }
        }
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        const users = await this.userService.getAllUsers();
        res.json(users);
    }

    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = parseInt(req.params.id);
            const user = await this.userService.getUserById(userId);
            if (user) {
                res.json(user);
            } else {
                throw new Error("User not found");
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                // 오류가 Error 객체가 아닌 경우의 처리
                res.status(500).json({ error: "An unknown error occurred" });
            }
        }
    }

    updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = parseInt(req.params.id);
            const { id, name } = req.body;
            if (!id || !name) {
                throw new Error("업데이트 할 내용이 없습니다.");
            }

            const updatedUser = await this.userService.updateUser(userId, id, name);
            if (updatedUser) {
                res.json(updatedUser);
            } else {
                throw new Error("User not found");
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                // 오류가 Error 객체가 아닌 경우의 처리
                res.status(500).json({ error: "An unknown error occurred" });
            }
        }
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = parseInt(req.params.id);
            const isDeleted = await this.userService.removeUser(userId);
            if (isDeleted) {
                res.status(204).send();
            } else {
                throw new Error("User not found");
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                // 오류가 Error 객체가 아닌 경우의 처리
                res.status(500).json({ error: "An unknown error occurred" });
            }
        }
    }
}
