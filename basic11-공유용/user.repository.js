export class UserRepository {
    constructor() {
        this.users = []; // 사용자 데이터를 저장하는 배열
    }

    // 사용자 생성
    createUser = async (user) => {
        this.users.push(user);
        return user;
    }

    // 모든 사용자 조회
    findAllUsers = async () => {
        return this.users;
    }

    // ID로 사용자 조회
    findUserById = async (userId) => {
        return this.users.find(user => user.id === userId);
    }

    // 사용자 업데이트
    updateUser = async (userId, id, name) => {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users[userIndex] = { id, name };
            return this.users[userIndex];
        }
        return null;
    }

    // 사용자 삭제
    deleteUser = async (userId) => {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}
