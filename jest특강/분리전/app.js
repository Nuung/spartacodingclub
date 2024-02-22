import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

export class UserManagement {
    constructor() {
        this.users = []; // 사용자 데이터를 저장하는 배열
    }

    // 사용자 생성
    createUser = async (req, res) => {
        const { id, name } = req.body;
        if (!id || !name) {
            res.status(422).json({ error: "ID와 이름은 필수입니다." });
            return;
        }
        const user = { id, name };
        this.users.push(user);
        res.status(201).json(user);
    }

    // 모든 사용자 조회
    findAllUsers = async (req, res) => {
        res.status(200).json(this.users);
    }

    // ID로 사용자 조회
    findUserById = async (req, res) => {
        const userId = req.params.id;
        const user = this.users.find(user => user.id === userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }

    // 사용자 업데이트
    updateUser = async (req, res) => {
        const userId = req.params.id;
        const { id, name } = req.body;
        if (!id || !name) {
            res.status(422).json({ error: "ID와 이름은 필수입니다." });
            return;
        }
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users[userIndex] = { id, name };
            res.status(200).json(this.users[userIndex]);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }

    // 사용자 삭제
    deleteUser = async (req, res) => {
        const userId = req.params.id;
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            res.status(204).json({});
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }
}

const userManagement = new UserManagement();

app.get("/users", async (req, res) => await userManagement.findAllUsers(req, res));
app.post("/user", async (req, res) => await userManagement.createUser(req, res));
app.get("/user/:id", async (req, res) => await userManagement.findUserById(req, res));
app.put("/user/:id", async (req, res) => await userManagement.updateUser(req, res));
app.delete("/user/:id", async (req, res) => await userManagement.deleteUser(req, res));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
