import { Entity } from '@loopback/repository';
export declare class DemoItem extends Entity {
    id?: number;
    name?: string;
    description?: string;
    constructor(data?: Partial<DemoItem>);
}
export interface DemoItemRelations {
}
export declare type DemoItemWithRelations = DemoItem & DemoItemRelations;
