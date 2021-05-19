"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const services_cache_1 = require("@labshare/services-cache");
const services_notifications_1 = require("@labshare/services-notifications");
const services_logger_1 = require("@labshare/services-logger");
const keys_1 = require("../keys");
const services_auth_1 = require("@labshare/services-auth");
/**
 * A simple controller to bounce back http requests
 */
let ServicesController = class ServicesController {
    constructor(req, cache, log, notifications, config) {
        this.req = req;
        this.cache = cache;
        this.log = log;
        this.notifications = notifications;
        this.config = config;
    }
    // Map to `POST /notifications`
    sendNotifications() {
        var _a, _b;
        return this.notifications.send(services_notifications_1.NotificationType.EMAIL, {
            to: (_b = (_a = this.config.thrizer) === null || _a === void 0 ? void 0 : _a.email) === null || _b === void 0 ? void 0 : _b.to,
            subject: 'send test email',
            text: 'test',
        });
    }
    // Map to `POST /cache`
    async saveCache() {
        const cachedObject = await this.cache.getItem('TEST');
        if (!cachedObject) {
            await this.cache.setItem('TEST', { value: 'from cache' }, { isCachedForever: true });
            return { value: `Cache added, try again` };
        }
        return cachedObject;
    }
    // Map to `POST /notifications`
    sendLogs() {
        this.log.info('logging from tests');
    }
    // Map to `GET /authenticated`
    async authenticated() {
        return `authenticated route`;
    }
};
tslib_1.__decorate([
    rest_1.post('/notifications', {
        responses: {
            '200': {
                description: `Notification sent.`,
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], ServicesController.prototype, "sendNotifications", null);
tslib_1.__decorate([
    rest_1.post('/cache', {
        responses: {
            '200': {
                description: `Object cached`,
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ServicesController.prototype, "saveCache", null);
tslib_1.__decorate([
    rest_1.post('/log', {
        responses: {
            '200': {
                description: `Log created, check the api's output.`,
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesController.prototype, "sendLogs", null);
tslib_1.__decorate([
    services_auth_1.authenticate(),
    rest_1.get('/authenticated', {
        responses: {
            '200': {
                description: `Test an protected route.`,
                schema: {
                    type: 'string',
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ServicesController.prototype, "authenticated", null);
ServicesController = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__param(1, context_1.inject(services_cache_1.CacheBindings.CACHE)),
    tslib_1.__param(2, context_1.inject(services_logger_1.LogBindings.LOGGER)),
    tslib_1.__param(3, context_1.inject(services_notifications_1.NotificationsBindings.NOTIFICATIONS)),
    tslib_1.__param(4, context_1.inject(keys_1.ThrizerApiBindings.CONFIG)),
    tslib_1.__metadata("design:paramtypes", [Object, services_cache_1.LabShareCache,
        services_logger_1.LabShareLogger,
        services_notifications_1.LabShareNotifications, Object])
], ServicesController);
exports.ServicesController = ServicesController;
//# sourceMappingURL=services.controller.js.map