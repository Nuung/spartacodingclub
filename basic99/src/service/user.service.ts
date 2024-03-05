// userService.ts
import { UserRepository } from "../repository/user.repository";
import { User } from "../models/user.entity";

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    // 새 사용자 생성
    public async createUser(id: number, name: string): Promise<User> {
        const user: User = { id, name };
        return await this.userRepository.createUser(user);
    }

    // 모든 사용자 조회
    public async getAllUsers(): Promise<User[]> {
        return await this.userRepository.findAllUsers();
    }

    // ID로 사용자 조회
    public async getUserById(userId: number): Promise<User | undefined> {
        return await this.userRepository.findUserById(userId);
    }

    // 사용자 정보 업데이트
    public async updateUser(userId: number, id: number, name: string): Promise<User | null> {
        const targetUser = await this.userRepository.findUserById(userId);
        if (targetUser) {
            return await this.userRepository.updateUser(userId, id, name);
        }
        return null;
    }

    // 사용자 삭제
    public async removeUser(userId: number): Promise<boolean> {
        const targetUser = await this.userRepository.findUserById(userId);
        if (targetUser) {
            return await this.userRepository.deleteUser(userId);
        }
        return false;
    }
}
