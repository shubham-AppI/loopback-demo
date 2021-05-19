"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoItemController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DemoItemController = class DemoItemController {
    constructor(demoItemRepository) {
        this.demoItemRepository = demoItemRepository;
    }
    async create(demoItem) {
        return this.demoItemRepository.create(demoItem);
    }
    async count(where) {
        return this.demoItemRepository.count(where);
    }
    async find(filter) {
        return this.demoItemRepository.find(filter);
    }
    async updateAll(demoItem, where) {
        return this.demoItemRepository.updateAll(demoItem, where);
    }
    async findById(id, filter) {
        return this.demoItemRepository.findById(id, filter);
    }
    async updateById(id, demoItem) {
        await this.demoItemRepository.updateById(id, demoItem);
    }
    async replaceById(id, demoItem) {
        await this.demoItemRepository.replaceById(id, demoItem);
    }
    async deleteById(id) {
        await this.demoItemRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/demo-items', {
        responses: {
            '200': {
                description: 'DemoItem model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.DemoItem) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DemoItem, {
                    title: 'NewDemoItem',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/demo-items/count', {
        responses: {
            '200': {
                description: 'DemoItem model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.DemoItem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/demo-items', {
        responses: {
            '200': {
                description: 'Array of DemoItem model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.DemoItem, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.DemoItem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/demo-items', {
        responses: {
            '200': {
                description: 'DemoItem PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DemoItem, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.DemoItem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DemoItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/demo-items/{id}', {
        responses: {
            '200': {
                description: 'DemoItem model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.DemoItem, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.DemoItem, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/demo-items/{id}', {
        responses: {
            '204': {
                description: 'DemoItem PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DemoItem, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DemoItem]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/demo-items/{id}', {
        responses: {
            '204': {
                description: 'DemoItem PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DemoItem]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/demo-items/{id}', {
        responses: {
            '204': {
                description: 'DemoItem DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DemoItemController.prototype, "deleteById", null);
DemoItemController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DemoItemRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DemoItemRepository])
], DemoItemController);
exports.DemoItemController = DemoItemController;
//# sourceMappingURL=demo-item.controller.js.map