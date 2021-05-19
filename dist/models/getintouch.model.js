"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Getintouch = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Getintouch = class Getintouch extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Getintouch.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Getintouch.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Getintouch.prototype, "zip", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Getintouch.prototype, "message", void 0);
Getintouch = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Getintouch);
exports.Getintouch = Getintouch;
//# sourceMappingURL=getintouch.model.js.map