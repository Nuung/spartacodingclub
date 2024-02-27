let users = [
    { name: "John Doe", age: 30, email: "john@example.com", },
    { name: "Jane Smith", age: 25, email: "jane@example.com" },
    { name: "Mike Johnson", age: 28, email: "mike@example.com" },
    { name: "My Name", age: 99, email: "mike@example.com" }
];

// 사용자 정보 출력
function displayUsers(users) {
    users.forEach(user => {
        console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
    });
}

// 특정 나이 이상의 사용자 필터링
function filterUsersByAge(users, minAge) {
    return users.filter(user => user.age >= minAge);
}

// 사용자의 나이 업데이트
function updateUserAge(users, name, newAge) {
    const user = users.find(user => user.name === name);
    if (user) {
        user.age = newAge;
    }
}

// 사용자 정보 업데이트 및 필터링 예시
updateUserAge(users, "John Doe", 31);
const usersOver25 = filterUsersByAge(users, 25);
displayUsers(usersOver25);