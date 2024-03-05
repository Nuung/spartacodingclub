"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.Logger = void 0;
class Logger {
    log(message) {
        console.log(message);
    }
}
exports.Logger = Logger;
class Application {
    constructor(logger) {
        this.logger = logger;
    }
    run() {
        this.logger.log('애플리케이션 시작...');
        const test = [1, 2, 3, 4, 5, 6];
        const result = test.reduce((acc, current) => acc + current, 0);
        this.logger.log('애플리케이션 종료...');
        return result;
    }
}
exports.Application = Application;
const logger = new Logger();
const app = new Application(logger);
app.run();
