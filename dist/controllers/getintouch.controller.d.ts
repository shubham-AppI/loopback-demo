import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Getintouch } from '../models';
import { GetintouchRepository } from '../repositories';
export declare class GetintouchController {
    getintouchRepository: GetintouchRepository;
    constructor(getintouchRepository: GetintouchRepository);
    create(getintouch: Omit<Getintouch, 'email'>): Promise<Getintouch>;
    count(): Promise<Count>;
    find(filter?: Filter<Getintouch>): Promise<Getintouch[]>;
    updateAll(getintouch: Getintouch, where?: Where<Getintouch>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Getintouch>): Promise<Getintouch>;
    updateById(id: string, getintouch: Getintouch): Promise<void>;
    replaceById(id: string, getintouch: Getintouch): Promise<void>;
    deleteById(id: string): Promise<void>;
}
