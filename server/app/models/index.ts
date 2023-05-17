import {DB_CONFIG} from "../../config/db.config";
import {Dialect, Sequelize, } from "sequelize";

const sequelize = new Sequelize(DB_CONFIG.DB, DB_CONFIG.USER, DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: DB_CONFIG.dialect as Dialect,
    pool: {
        max: DB_CONFIG.pool.max,
        min: DB_CONFIG.pool.min,
        acquire: DB_CONFIG.pool.acquire,
        idle: DB_CONFIG.pool.idle
    }
});

const db: Partial<{Sequelize: typeof Sequelize, sequelize: Sequelize, movie: any}> = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movie = require("./movie.model")(sequelize, Sequelize);

export {db};