"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const api_ds_datasource_config_json_1 = tslib_1.__importDefault(require("./api-ds.datasource.config.json"));
let ApiDsDataSource = class ApiDsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = api_ds_datasource_config_json_1.default) {
        super(dsConfig);
    }
    /**
     * Start the datasource when application is started
     */
    start() {
        // Add your logic here to be invoked when the application is started
    }
    /**
     * Disconnect the datasource when application is stopped. This allows the
     * application to be shut down gracefully.
     */
    stop() {
        return super.disconnect();
    }
};
ApiDsDataSource.dataSourceName = 'ApiDS';
ApiDsDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.ApiDS', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], ApiDsDataSource);
exports.ApiDsDataSource = ApiDsDataSource;
//# sourceMappingURL=api-ds.datasource.js.map