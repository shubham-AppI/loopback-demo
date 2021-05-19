"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoItem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DemoItem = class DemoItem extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], DemoItem.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], DemoItem.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], DemoItem.prototype, "description", void 0);
DemoItem = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], DemoItem);
exports.DemoItem = DemoItem;
//# sourceMappingURL=demo-item.model.js.map