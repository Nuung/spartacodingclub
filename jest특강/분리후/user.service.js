export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    // 새 사용자 생성
    createUser = async (id, name) => {
        const user = { id, name };
        return await this.userRepository.createUser(user);
    }

    // 모든 사용자 조회
    getAllUsers = async () => {
        return await this.userRepository.findAllUsers();
    }

    // ID로 사용자 조회
    getUserById = async (userId) => {
        return await this.userRepository.findUserById(userId);
    }

    // 사용자 정보 업데이트
    updateUser = async (userId, id, name) => {
        const targetUser = await this.userRepository.findUserById(userId);
        if (targetUser) {
            return await this.userRepository.updateUser(userId, id, name);
        }
        return null;
    }

    // 사용자 삭제
    removeUser = async (userId) => {
        const targetUser = await this.userRepository.findUserById(userId);
        if (targetUser) {
            return await this.userRepository.deleteUser(userId);
        }
        return false;
    }
}
