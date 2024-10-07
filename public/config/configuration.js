"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.MONGO_INITDB_HOST,
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
        port: parseInt(process.env.MONGO_INITDB_PORT, 10),
        name: process.env.DATABASE_NAME,
    },
}));
//# sourceMappingURL=configuration.js.map