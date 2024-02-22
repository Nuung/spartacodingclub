"use strict";
// User 클래스 정의에 타입 선언 추가
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
    updateAge(newAge) {
        this.age = newAge;
    }
}
// UserManager 클래스 정의에 타입 선언 추가
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    displayAllUsers() {
        this.users.forEach(user => user.displayInfo());
    }
    filterUsersByAge(minAge) {
        return this.users.filter(user => user.age >= minAge);
    }
    updateUserAge(name, newAge) {
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
