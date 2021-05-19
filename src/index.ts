import {ThrizerApplication} from './application';
import {ExpressServer} from './server';
export {ThrizerApplication};
export {ThrizerApplication as app};
require('dotenv').config();
const config = require('config');

export async function main() {
  const server = new ExpressServer(config);
  await server.boot();
  await server.start();
  console.log(
    `Server is running at http://127.0.0.1:${config.rest.port}${config.thrizer.basePath}`,
  );
}
