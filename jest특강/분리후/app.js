import express from "express";
import bodyParser from "body-parser";
import { UserRepository } from "./user.repository.js";
import { UserService } from "./user.service.js";
import { UserController } from "./user.controller.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// 사용자 관련 라우트 설정
app.get("/users", async (req, res) => await userController.getAllUsers(req, res));
app.post("/user", async (req, res) => await userController.createUser(req, res));
app.get("/user/:id", async (req, res) => await userController.getUserById(req, res));
app.put("/user/:id", async (req, res) => await userController.updateUser(req, res));
app.delete("/user/:id", async (req, res) => await userController.deleteUser(req, res));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
