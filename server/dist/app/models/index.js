"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const db_config_1 = require("../../config/db.config");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(db_config_1.DB_CONFIG.DB, db_config_1.DB_CONFIG.USER, db_config_1.DB_CONFIG.PASSWORD, {
    host: db_config_1.DB_CONFIG.HOST,
    dialect: db_config_1.DB_CONFIG.dialect,
    pool: {
        max: db_config_1.DB_CONFIG.pool.max,
        min: db_config_1.DB_CONFIG.pool.min,
        acquire: db_config_1.DB_CONFIG.pool.acquire,
        idle: db_config_1.DB_CONFIG.pool.idle
    }
});
const db = {};
exports.db = db;
db.Sequelize = sequelize_1.Sequelize;
db.sequelize = sequelize;
db.movie = require("./movie.model")(sequelize, sequelize_1.Sequelize);
