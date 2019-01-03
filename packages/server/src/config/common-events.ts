
import { basePath } from './environment';

export class CommonEventsModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = CommonEventsModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    // Common Events Repositories
    {
      type: 'Repository', name: 'CommonEventsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/CommonEvents.json` } 
    },
    /******* ROUTERS  ***********************/
    // Events Routers
    { type: 'Router', name: 'CommonEventsRouter',
      deps: [ 'CommonEventsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/common-events' }
    },
  ];
  
}
