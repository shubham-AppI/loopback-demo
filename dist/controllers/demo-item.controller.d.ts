import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DemoItem } from '../models';
import { DemoItemRepository } from '../repositories';
export declare class DemoItemController {
    demoItemRepository: DemoItemRepository;
    constructor(demoItemRepository: DemoItemRepository);
    create(demoItem: Omit<DemoItem, 'id'>): Promise<DemoItem>;
    count(where?: Where<DemoItem>): Promise<Count>;
    find(filter?: Filter<DemoItem>): Promise<DemoItem[]>;
    updateAll(demoItem: DemoItem, where?: Where<DemoItem>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<DemoItem>): Promise<DemoItem>;
    updateById(id: number, demoItem: DemoItem): Promise<void>;
    replaceById(id: number, demoItem: DemoItem): Promise<void>;
    deleteById(id: number): Promise<void>;
}
