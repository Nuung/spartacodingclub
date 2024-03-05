// userRepository.ts
import { User } from "../models/user.entity";

export class UserRepository {
    private users: User[] = []; // 사용자 데이터를 저장하는 배열

    // 사용자 생성
    async createUser(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    // 모든 사용자 조회
    async findAllUsers(): Promise<User[]> {
        return this.users;
    }

    // ID로 사용자 조회
    async findUserById(userId: number): Promise<User | undefined> {
        return this.users.find(user => user.id === userId);
    }

    // 사용자 업데이트
    async updateUser(userId: number, id: number, name: string): Promise<User | null> {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users[userIndex] = { id, name };
            return this.users[userIndex];
        }
        return null;
    }

    // 사용자 삭제
    async deleteUser(userId: number): Promise<boolean> {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}
