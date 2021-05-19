import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GetintouchDataSource} from '../datasources';
import {Getintouch, GetintouchRelations} from '../models';

export class GetintouchRepository extends DefaultCrudRepository<
  Getintouch,
  typeof Getintouch.prototype.email,
  GetintouchRelations
> {
  constructor(
    @inject('datasources.getintouch') dataSource: GetintouchDataSource,
  ) {
    super(Getintouch, dataSource);
  }
}
