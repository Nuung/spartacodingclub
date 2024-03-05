import { Application } from "./ex3";

describe('Application with mocked Logger', () => {
    let mockLog: jest.Mock;
    let app: Application;

    beforeEach(() => {
        // Logger의 log 메소드를 모킹합니다.
        mockLog = jest.fn();
        const mockLogger = { log: mockLog };

        // 모킹된 Logger를 Application에 주입합니다.
        app = new Application(mockLogger);
    });

    it('should log start and end messages and return the correct sum', () => {
        const result = app.run();

        // 올바른 결과값 반환 검증
        expect(result).toBe(21); // 1+2+3+4+5+6 = 21

        // Logger의 log 메소드 호출 검증
        expect(mockLog).toHaveBeenCalledWith('애플리케이션 시작...');
        expect(mockLog).toHaveBeenCalledWith('애플리케이션 종료...');
        expect(mockLog).toHaveBeenCalledTimes(2);
    });
});
