export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    // 사용자 생성
    createUser = async (req, res) => {
        try {
            const { id, name } = req.body;
            if (!id || !name) {
                throw new Error("ID와 이름은 필수입니다.");
            }
            const user = await this.userService.createUser(id, name);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // 모든 사용자 조회
    getAllUsers = async (req, res) => {
        const users = await this.userService.getAllUsers();
        res.json(users);
    }

    // ID로 사용자 조회
    getUserById = async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUserById(userId);
            if (user) {
                res.json(user);
            }
            else {
                throw new Error("User not found");
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // 사용자 정보 업데이트
    updateUser = async (req, res) => {
        try {
            const userId = req.params.id;
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
            res.status(400).json({ error: error.message });
        }
    }

    // 사용자 삭제
    deleteUser = async (req, res) => {
        try {
            const userId = req.params.id;
            const isDeleted = await this.userService.removeUser(userId);
            if (isDeleted) {
                res.status(204).json({});
            } else {
                throw new Error("User not found");
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
