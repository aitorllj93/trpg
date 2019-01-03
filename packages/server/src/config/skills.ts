
import { basePath } from './environment';

export class SkillsModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = SkillsModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    // Animations Repositories
    {
      type: 'Repository', name: 'SkillsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Skills.json` }
    },
    /******* ROUTERS  ***********************/
    // Animations Routers
    {
      type: 'Router', name: 'SkillsRouter',
      deps: [ 'SkillsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/skills' }
    },
  ];
  
}
