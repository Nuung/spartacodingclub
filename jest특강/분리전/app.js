import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

class UserManagement {
    constructor() {
        this.users = []; // 사용자 데이터를 저장하는 배열
    }

    // 사용자 생성
    createUser(req, res) {
        const user = req.body;
        if (!user.id || !user.name) {
            res.status(400).json({ error: "ID와 이름은 필수입니다." });
            return;
        }
        this.users.push(user);
        res.status(201).json(user);
    }

    // 모든 사용자 조회
    findAllUsers(req, res) {
        res.json(this.users);
    }

    // ID로 사용자 조회
    findUserById(req, res) {
        const userId = req.params.id;
        const user = this.users.find(user => user.id === userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }

    // 사용자 업데이트
    updateUser(req, res) {
        const userId = req.params.id;
        const userData = req.body;
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...userData };
            res.json(this.users[userIndex]);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }

    // 사용자 삭제
    deleteUser(req, res) {
        const userId = req.params.id;
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }
}

const userManagement = new UserManagement();

app.post("/users", (req, res) => userManagement.createUser(req, res));
app.get("/users", (req, res) => userManagement.findAllUsers(req, res));
app.get("/users/:id", (req, res) => userManagement.findUserById(req, res));
app.put("/users/:id", (req, res) => userManagement.updateUser(req, res));
app.delete("/users/:id", (req, res) => userManagement.deleteUser(req, res));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
