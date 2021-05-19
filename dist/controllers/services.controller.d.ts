/// <reference types="express" />
import { Request } from '@loopback/rest';
import { LabShareCache } from '@labshare/services-cache';
import { LabShareNotifications } from '@labshare/services-notifications';
import { LabShareLogger } from '@labshare/services-logger';
import { ApplicationConfig } from '@loopback/core';
/**
 * A simple controller to bounce back http requests
 */
export declare class ServicesController {
    private req;
    private cache;
    private log;
    private notifications;
    config: ApplicationConfig;
    constructor(req: Request, cache: LabShareCache, log: LabShareLogger, notifications: LabShareNotifications, config: ApplicationConfig);
    sendNotifications(): object;
    saveCache(): Promise<unknown>;
    sendLogs(): void;
    authenticated(): Promise<string>;
}
