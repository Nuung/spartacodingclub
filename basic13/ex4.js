"use strict";
class DBConManager {
    // 생성자를 private으로 선언하여 외부에서 인스턴스를 직접 생성할 수 없게 합니다.
    constructor() {
        // 데이터베이스 연결 설정
        this.connection = {}; // 예시를 위해 빈 객체를 사용. 실제로는 데이터베이스 연결 로직이 들어감.
    }
    // 싱글톤 인스턴스에 접근하기 위한 메소드
    static getInstance() {
        // 인스턴스가 없으면 생성, 있으면 기존 인스턴스 반환
        if (!DBConManager.instance) {
            DBConManager.instance = new DBConManager();
        }
        return DBConManager.instance;
    }
    // 데이터베이스 연결을 사용하는 메소드 예시
    connect() {
        // 연결 로직 처리
        console.log("Database connected");
    }
    // 데이터베이스 연결을 종료하는 메소드 예시
    disconnect() {
        // 연결 종료 로직 처리
        console.log("Database disconnected");
    }
}
const dbManager = DBConManager.getInstance();
dbManager.connect();
// 필요한 데이터베이스 작업 수행
dbManager.disconnect();
// 어디서든 같은 인스턴스에 접근
const dbManager2 = DBConManager.getInstance();
console.log(dbManager === dbManager2); // true
