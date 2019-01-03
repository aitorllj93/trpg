
import { basePath } from './environment';

export class StatesModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = StatesModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    // Animations Repositories
    {
      type: 'Repository', name: 'StatesRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/States.json` }
    },
    /******* ROUTERS  ***********************/
    // Animations Routers
    {
      type: 'Router', name: 'StatesRouter',
      deps: [ 'StatesRepository' ],
      config: { adapter: 'Rest', baseUrl: '/states' }
    },
  ];
  
}
