// jest.config.js

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // 프로젝트의 테스트 파일 경로나 패턴을 설정합니다 (옵션)
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  // TypeScript 프로젝트 설정 파일 위치를 지정합니다 (옵션)
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
