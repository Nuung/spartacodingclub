export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    // 사용자 생성
    createUser(req, res) {
        try {
            const user = this.userService.addUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // 모든 사용자 조회
    getAllUsers(req, res) {
        res.json(this.userService.getAllUsers());
    }

    // ID로 사용자 조회
    getUserById(req, res) {
        const user = this.userService.getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    // 사용자 정보 업데이트
    updateUser(req, res) {
        const updatedUser = this.userService.updateUser(req.params.id, req.body);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    // 사용자 삭제
    deleteUser(req, res) {
        const isDeleted = this.userService.removeUser(req.params.id);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
}

module.exports = UserController;
