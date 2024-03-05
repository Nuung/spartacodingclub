export class Logger {
    log(message: string): void {
        // throw new Error("에러발생!");
        console.log(message);
    }
}


export class Application {
    private logger: Logger;

    constructor() {
        // Logger 클래스에 직접 의존
        this.logger = new Logger();
    }

    run(): number {
        this.logger.log('애플리케이션 시작...');
        // 애플리케이션 로직
        // throw new Error("에러발생!");
        const test = [1, 2, 3, 4, 5, 6];
        const result = test.reduce((acc, current) => acc + current, 0);
        this.logger.log('애플리케이션 종료...');
        return result;
    }
}

const app = new Application();
app.run();