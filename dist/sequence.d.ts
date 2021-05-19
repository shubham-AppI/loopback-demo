import { FindRoute, InvokeMethod, ParseParams, Reject, RequestContext, Send, SequenceHandler } from '@loopback/rest';
import { AuthenticateFn } from '@labshare/services-auth';
export declare class LabShareSequence implements SequenceHandler {
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    send: Send;
    reject: Reject;
    protected authenticateRequest: AuthenticateFn;
    constructor(findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject, authenticateRequest: AuthenticateFn);
    handle(context: RequestContext): Promise<void>;
}
