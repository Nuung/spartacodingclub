export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    // 새 사용자 생성
    addUser(user) {
        // 유효성 검사 및 비즈니스 로직 처리
        // 예: user 객체에 필수 필드가 있는지 확인
        if (!user.id || !user.name) {
            throw new Error('ID와 이름은 필수입니다.');
        }
        return this.userRepository.createUser(user);
    }

    // 모든 사용자 조회
    getAllUsers() {
        return this.userRepository.findAllUsers();
    }

    // ID로 사용자 조회
    getUserById(userId) {
        return this.userRepository.findUserById(userId);
    }

    // 사용자 정보 업데이트
    updateUser(userId, userData) {
        return this.userRepository.updateUser(userId, userData);
    }

    // 사용자 삭제
    removeUser(userId) {
        return this.userRepository.deleteUser(userId);
    }
}
