import { Application } from "./ex1";

describe('Application', () => {
    it('should calculate and return the sum correctly', () => {
        const app = new Application();
        const result = app.run();

        // result가 예상한 결과값인지 검증합니다.
        expect(result).toBe(21); // 1+2+3+4+5+6 = 21
    });
});
