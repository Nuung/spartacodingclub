// User 클래스 정의에 타입 선언 추가
class User {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }

    updateAge(newAge: number): void {
        this.age = newAge;
    }
}

// UserManager 클래스 정의에 타입 선언 추가
class UserManager {
    users: User[];

    constructor() {
        this.users = [];
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    displayAllUsers(): void {
        this.users.forEach(user => user.displayInfo());
    }

    filterUsersByAge(minAge: number): User[] {
        return this.users.filter(user => user.age >= minAge);
    }

    updateUserAge(name: string, newAge: number): void {
        const user = this.users.find(user => user.name === name);
        if (user) {
            user.updateAge(newAge);
        }
    }
}

// 사용 예시
let userManager = new UserManager();
userManager.addUser(new User("John Doe", 30, "john@example.com"));
userManager.addUser(new User("Jane Smith", 25, "jane@example.com"));
userManager.addUser(new User("Mike Johnson", 28, "mike@example.com"));

userManager.updateUserAge("John Doe", 31);
userManager.displayAllUsers();

const usersOver25 = userManager.filterUsersByAge(25);
console.log("Users over 25:");
usersOver25.forEach(user => user.displayInfo());
