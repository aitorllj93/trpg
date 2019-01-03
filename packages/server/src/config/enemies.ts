
import { basePath } from './environment';

export class EnemiesModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = EnemiesModule.defaults) => [
  /******* REPOSITORIES  ***********************/
  // Enemies Repositories
  { 
    type: 'Repository', name: 'EnemiesRepository',
    config: { adapter: 'LowDB', connection: `${basePath}/data/Enemies.json` }
  },
  { 
    type: 'Repository', name: 'TroopsRepository',
    config: { adapter: 'LowDB', connection: `${basePath}/data/Troops.json` }
  },
  /******* ROUTERS  ***********************/
  // Enemies Routers
  {
    type: 'Router', name: 'EnemiesRouter',
    deps: [ 'EnemiesRepository' ],
    config: { adapter: 'Rest', baseUrl: '/enemies' }
  },
  {
    type: 'Router', name: 'TroopsRouter',
    deps: [ 'TroopsRepository' ],
    config: { adapter: 'Rest', baseUrl: '/troops' }
  },
  ];
  
}
