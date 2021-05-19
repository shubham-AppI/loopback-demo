import { ThrizerApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
export declare class ExpressServer {
    private options;
    private app;
    readonly api: ThrizerApplication;
    private server;
    constructor(options?: ApplicationConfig);
    boot(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
}
