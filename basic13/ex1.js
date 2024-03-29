"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.Logger = void 0;
class Logger {
    log(message) {
        // throw new Error("에러발생!");
        console.log(message);
    }
}
exports.Logger = Logger;
class Application {
    constructor() {
        // Logger 클래스에 직접 의존
        this.logger = new Logger();
    }
    run() {
        this.logger.log('애플리케이션 시작...');
        // 애플리케이션 로직
        // throw new Error("에러발생!");
        const test = [1, 2, 3, 4, 5, 6];
        const result = test.reduce((acc, current) => acc + current, 0);
        this.logger.log('애플리케이션 종료...');
        return result;
    }
}
exports.Application = Application;
const app = new Application();
app.run();
