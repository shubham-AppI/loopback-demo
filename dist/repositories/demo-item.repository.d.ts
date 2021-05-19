import { DefaultCrudRepository } from '@loopback/repository';
import { DemoItem, DemoItemRelations } from '../models';
import { ApiDsDataSource } from '../datasources';
export declare class DemoItemRepository extends DefaultCrudRepository<DemoItem, typeof DemoItem.prototype.id, DemoItemRelations> {
    constructor(dataSource: ApiDsDataSource);
}
