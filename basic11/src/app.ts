import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { UserRepository } from "./repository/user.repository";
import { UserService } from "./service/user.service";
import { UserController } from "./controller/user.controller";

const app: Express = express();
const PORT: number = 3000;

app.use(bodyParser.json());
app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// 사용자 관련 라우트 설정
app.get("/users", (req: Request, res: Response) => userController.getAllUsers(req, res));
app.post("/user", (req: Request, res: Response) => userController.createUser(req, res));
app.get("/user/:id", (req: Request, res: Response) => userController.getUserById(req, res));
app.put("/user/:id", (req: Request, res: Response) => userController.updateUser(req, res));
app.delete("/user/:id", (req: Request, res: Response) => userController.deleteUser(req, res));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
