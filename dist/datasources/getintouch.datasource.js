"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetintouchDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'getintouch',
    connector: 'mongodb',
    url: '',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: 'local',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let GetintouchDataSource = class GetintouchDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
GetintouchDataSource.dataSourceName = 'getintouch';
GetintouchDataSource.defaultConfig = config;
GetintouchDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.getintouch', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetintouchDataSource);
exports.GetintouchDataSource = GetintouchDataSource;
//# sourceMappingURL=getintouch.datasource.js.map