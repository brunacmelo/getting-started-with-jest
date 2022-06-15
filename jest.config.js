// jest.config.js

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["./src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};