"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
const tslib_1 = require("tslib");
const application_1 = require("./application");
const express_1 = tslib_1.__importDefault(require("express"));
const p_event_1 = tslib_1.__importDefault(require("p-event"));
class ExpressServer {
    constructor(options = {}) {
        this.options = options;
        this.app = express_1.default();
        this.api = new application_1.ThrizerApplication(options);
        // Expose the front-end assets via Express, not as LB4 route
        this.app.use(this.options.thrizer.basePath, this.api.requestHandler);
        // Serve static files in the public folder
        this.app.use(express_1.default.static('public'));
    }
    async boot() {
        await this.api.boot();
    }
    async start() {
        await this.api.start();
        this.server = this.app.listen(this.options.rest.port, this.options.rest.host);
        await p_event_1.default(this.server, 'listening');
    }
    async stop() {
        if (!this.server)
            return;
        this.server.close();
        await p_event_1.default(this.server, 'close');
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=server.js.map