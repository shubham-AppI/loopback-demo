import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'getintouch',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'local',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class GetintouchDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'getintouch';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.getintouch', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
