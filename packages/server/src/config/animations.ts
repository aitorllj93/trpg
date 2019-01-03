
import { basePath } from './environment';

export class AnimationsModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = AnimationsModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    // Animations Repositories
    {
      type: 'Repository', name: 'AnimationsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Animations.json` }
    },
    /******* ROUTERS  ***********************/
    // Animations Routers
    {
      type: 'Router', name: 'AnimationsRouter',
      deps: [ 'AnimationsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/animations' }
    },
  ];
  
}
