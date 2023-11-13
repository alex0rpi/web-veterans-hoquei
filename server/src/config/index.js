"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptConfig = exports.dbConfig = exports.appConfig = void 0;
require("dotenv/config");
const zod_1 = __importDefault(require("zod"));
const appConfigSchema = zod_1.default.object({
    port: zod_1.default.string(),
    jwtKey: zod_1.default.string(),
    jwtExpiration: zod_1.default.string(),
});
const dbConfigSchema = zod_1.default.object({
    host: zod_1.default.string(),
    port: zod_1.default.string(),
    database: zod_1.default.string(),
    user: zod_1.default.string(),
    pass: zod_1.default.string(),
    link: zod_1.default.string(),
});
const appConfig = {
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000,
    jwtKey: (_b = process.env.JWT_KEY) !== null && _b !== void 0 ? _b : 'secret',
    jwtExpiration: (_c = process.env.JWT_EXPIRATION) !== null && _c !== void 0 ? _c : '14d',
};
exports.appConfig = appConfig;
appConfigSchema.parse(appConfig);
const dbConfig = {
    host: (_d = process.env.DB_HOST) !== null && _d !== void 0 ? _d : 'localhost',
    port: (_e = process.env.DB_PORT) !== null && _e !== void 0 ? _e : 5432,
    database: (_f = process.env.DB_NAME) !== null && _f !== void 0 ? _f : 'web-veterans-hoquei',
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    link: process.env.DB_LINK,
};
exports.dbConfig = dbConfig;
dbConfigSchema.parse(dbConfig);
const bcryptConfig = {
    saltRounds: 10,
};
exports.bcryptConfig = bcryptConfig;
