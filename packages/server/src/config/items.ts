
import { basePath } from './environment';

export class ItemsModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = ItemsModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    // Items Repositories
    {
      type: 'Repository', name: 'ItemsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Items.json` }
    },
    {
      type: 'Repository', name: 'WeaponsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Weapons.json` }
    },
    { type: 'Repository', name: 'ArmorsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Armors.json` }
    },
    // Items Routers
    {
      type: 'Router', name: 'ItemsRouter',
      deps: [ 'ItemsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/items' }
    },
    {
      type: 'Router', name: 'WeaponsRouter',
      deps: [ 'WeaponsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/weapons' }
    },
    {
      type: 'Router', name: 'ArmorsRouter',
      deps: [ 'ArmorsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/armors' }
    },
  ];
  
}
