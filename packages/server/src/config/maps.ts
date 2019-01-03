
import { basePath } from './environment';

export class MapsModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = MapsModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    {
      type: 'Repository', name: 'TilesetsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Tilesets.json` }
    },
    {
      type: 'Repository', name: 'MapInfosRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/MapInfos.json` }
    },
    /******* ROUTERS  ***********************/
    {
      type: 'Router', name: 'TilesetsRouter',
      deps: [ 'TilesetsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/tilesets' }
    },
    {
      type: 'Router', name: 'MapInfosRouter',
      deps: [ 'MapInfosRepository' ],
      config: { adapter: 'Rest', baseUrl: '/map-infos' }
    },
  ];
  
}
