"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONFIG = void 0;
exports.DB_CONFIG = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123",
    DB: "testdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
