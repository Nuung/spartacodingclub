export class Logger {
    log(message: string): void {
        throw new Error("알 수 없는 에러입니다!");
        console.log(message);
    }
}

export class Application {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    run(): number {
        this.logger.log('애플리케이션 시작...');
        const test = [1, 2, 3, 4, 5, 6];
        const result = test.reduce((acc, current) => acc + current, 0);
        this.logger.log('애플리케이션 종료...');
        return result;
    }
}

const logger = new Logger()
const app = new Application(logger);
app.run();