import { Entity } from '@loopback/repository';
export declare class Getintouch extends Entity {
    name: string;
    email: string;
    zip: number;
    message: string;
    constructor(data?: Partial<Getintouch>);
}
export interface GetintouchRelations {
}
export declare type GetintouchWithRelations = Getintouch & GetintouchRelations;
