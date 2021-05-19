"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetintouchRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let GetintouchRepository = class GetintouchRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Getintouch, dataSource);
    }
};
GetintouchRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.getintouch')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.GetintouchDataSource])
], GetintouchRepository);
exports.GetintouchRepository = GetintouchRepository;
//# sourceMappingURL=getintouch.repository.js.map