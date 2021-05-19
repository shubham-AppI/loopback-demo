import { DefaultCrudRepository } from '@loopback/repository';
import { GetintouchDataSource } from '../datasources';
import { Getintouch, GetintouchRelations } from '../models';
export declare class GetintouchRepository extends DefaultCrudRepository<Getintouch, typeof Getintouch.prototype.email, GetintouchRelations> {
    constructor(dataSource: GetintouchDataSource);
}
