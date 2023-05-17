"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = require("./app/models");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
var corsOptions = {
    origin: process.env.APP_URI
};
app.use(cors(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('Welcome to movie app backend');
});
app.listen(port, () => {
    var _a;
    (_a = models_1.db.sequelize) === null || _a === void 0 ? void 0 : _a.sync().then(() => {
        console.log("Synced db.");
    }).catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
});
