"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabShareSequence = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const services_auth_1 = require("@labshare/services-auth");
const SequenceActions = rest_1.RestBindings.SequenceActions;
let LabShareSequence = class LabShareSequence {
    constructor(findRoute, parseParams, invoke, send, reject, 
    // Inject the new authentication action
    authenticateRequest) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.authenticateRequest = authenticateRequest;
    }
    async handle(context) {
        try {
            const { request, response } = context;
            const route = this.findRoute(request);
            // Authenticate the request. We need this sequence action to run before "invoke" to ensure authentication
            // occurs first.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            await this.authenticateRequest(request, response);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (err) {
            this.reject(context, err);
        }
    }
};
LabShareSequence = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(SequenceActions.FIND_ROUTE)),
    tslib_1.__param(1, context_1.inject(SequenceActions.PARSE_PARAMS)),
    tslib_1.__param(2, context_1.inject(SequenceActions.INVOKE_METHOD)),
    tslib_1.__param(3, context_1.inject(SequenceActions.SEND)),
    tslib_1.__param(4, context_1.inject(SequenceActions.REJECT)),
    tslib_1.__param(5, context_1.inject(services_auth_1.AuthenticationBindings.AUTH_ACTION)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Function, Function, Function, Function])
], LabShareSequence);
exports.LabShareSequence = LabShareSequence;
//# sourceMappingURL=sequence.js.map