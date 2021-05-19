"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.app = exports.ThrizerApplication = void 0;
const application_1 = require("./application");
Object.defineProperty(exports, "ThrizerApplication", { enumerable: true, get: function () { return application_1.ThrizerApplication; } });
Object.defineProperty(exports, "app", { enumerable: true, get: function () { return application_1.ThrizerApplication; } });
const server_1 = require("./server");
require('dotenv').config();
const config = require('config');
async function main() {
    const server = new server_1.ExpressServer(config);
    await server.boot();
    await server.start();
    console.log(`Server is running at http://127.0.0.1:${config.rest.port}${config.thrizer.basePath}`);
}
exports.main = main;
//# sourceMappingURL=index.js.map