"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrizerApplication = void 0;
const tslib_1 = require("tslib");
const services_logger_1 = require("@labshare/services-logger");
const services_auth_1 = require("@labshare/services-auth");
const services_cache_1 = require("@labshare/services-cache");
const services_notifications_1 = require("@labshare/services-notifications");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
const keys_1 = require("./keys");
class ThrizerApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.LabShareSequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.setUpBindings(this.options);
        this.setUpComponents();
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
    setUpComponents() {
        // Binding the services-logger component
        this.component(services_logger_1.ServicesLoggerComponent);
        // Binding the services-cache component
        this.component(services_cache_1.ServicesCacheComponent);
        // Binding the services-notifications component
        this.component(services_notifications_1.ServicesNotificationsComponent);
        this.component(services_auth_1.ServicesAuthComponent);
    }
    setUpBindings(options) {
        var _a, _b, _c, _d, _e;
        this.bind('datasources.config.ApiDS').to((_a = options.thrizer) === null || _a === void 0 ? void 0 : _a.db);
        this.bind(keys_1.ThrizerApiBindings.CONFIG).to(options);
        this.bind(services_logger_1.LogBindings.LOG_CONFIG).to((_b = options === null || options === void 0 ? void 0 : options.services) === null || _b === void 0 ? void 0 : _b.log);
        this.bind(services_cache_1.CacheBindings.CACHE_CONFIG).to((_c = options === null || options === void 0 ? void 0 : options.services) === null || _c === void 0 ? void 0 : _c.cache);
        this.bind(services_notifications_1.NotificationsBindings.NOTIFICATIONS_CONFIG).to((_d = options === null || options === void 0 ? void 0 : options.services) === null || _d === void 0 ? void 0 : _d.notifications);
        this.bind(services_auth_1.AuthenticationBindings.AUTH_CONFIG).to((_e = options === null || options === void 0 ? void 0 : options.services) === null || _e === void 0 ? void 0 : _e.auth);
    }
}
exports.ThrizerApplication = ThrizerApplication;
//# sourceMappingURL=application.js.map