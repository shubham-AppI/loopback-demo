"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetintouchController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GetintouchController = class GetintouchController {
    constructor(getintouchRepository) {
        this.getintouchRepository = getintouchRepository;
    }
    async create(getintouch) {
        return this.getintouchRepository.create(getintouch);
    }
    async count() {
        return this.getintouchRepository.count();
    }
    async find(filter) {
        return this.getintouchRepository.find(filter);
    }
    async updateAll(getintouch, where) {
        return this.getintouchRepository.updateAll(getintouch, where);
    }
    async findById(id, filter) {
        return this.getintouchRepository.findById(id, filter);
    }
    async updateById(id, getintouch) {
        await this.getintouchRepository.updateById(id, getintouch);
    }
    async replaceById(id, getintouch) {
        await this.getintouchRepository.replaceById(id, getintouch);
    }
    async deleteById(id) {
        await this.getintouchRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/guest'),
    rest_1.response(200, {
        description: 'Getintouch model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Getintouch) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Getintouch, {
                    title: 'NewGetintouch',
                    exclude: ['email'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/guest/count'),
    rest_1.response(200, {
        description: 'Getintouch model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/guest'),
    rest_1.response(200, {
        description: 'Array of Getintouch model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Getintouch, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Getintouch)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/guest'),
    rest_1.response(200, {
        description: 'Getintouch PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Getintouch, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Getintouch)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Getintouch, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/guest/{id}'),
    rest_1.response(200, {
        description: 'Getintouch model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Getintouch, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Getintouch, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/guest/{id}'),
    rest_1.response(204, {
        description: 'Getintouch PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Getintouch, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Getintouch]),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/guest/{id}'),
    rest_1.response(204, {
        description: 'Getintouch PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Getintouch]),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/guest/{id}'),
    rest_1.response(204, {
        description: 'Getintouch DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], GetintouchController.prototype, "deleteById", null);
GetintouchController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.GetintouchRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GetintouchRepository])
], GetintouchController);
exports.GetintouchController = GetintouchController;
//# sourceMappingURL=getintouch.controller.js.map