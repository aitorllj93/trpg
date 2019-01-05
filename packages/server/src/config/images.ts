
import { basePath } from './environment';

export class ImagesModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = ImagesModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    // Characters
    {
      type: 'Repository', name: 'CharactersImagesRepository',
      config: { adapter: 'File', connection: `${basePath}/img/characters` }
    },
    // Animations Routers
    {
      type: 'Router', name: 'CharactersImagesRouter',
      deps: [ 'CharactersImagesRepository' ],
      config: { adapter: 'Rest', baseUrl: '/images/characters' }
    },
    {
      type: 'Repository', name: 'FacesImagesRepository',
      config: { adapter: 'File', connection: `${basePath}/img/faces` }
    },
    // Animations Routers
    {
      type: 'Router', name: 'FacesImagesRouter',
      deps: [ 'FacesImagesRepository' ],
      config: { adapter: 'Rest', baseUrl: '/images/faces' }
    },
    // Animations Repositories
    {
      type: 'Repository', name: 'AnimationsImagesRepository',
      config: { adapter: 'File', connection: `${basePath}/img/animations` }
    },
    /******* ROUTERS  ***********************/
    // Animations Routers
    {
      type: 'Router', name: 'AnimationsImagesRouter',
      deps: [ 'AnimationsImagesRepository' ],
      config: { adapter: 'Rest', baseUrl: '/images/animations' }
    },
    // Animations Repositories
    {
      type: 'Repository', name: 'Battlebacks1ImagesRepository',
      config: { adapter: 'File', connection: `${basePath}/img/battlebacks1` }
    },
    /******* ROUTERS  ***********************/
    // Animations Routers
    {
      type: 'Router', name: 'Battlebacks1ImagesRouter',
      deps: [ 'Battlebacks1ImagesRepository' ],
      config: { adapter: 'Rest', baseUrl: '/images/battlebacks1' }
    },
    {
      type: 'Repository', name: 'Battlebacks21ImagesRepository',
      config: { adapter: 'File', connection: `${basePath}/img/battlebacks2` }
    },
    /******* ROUTERS  ***********************/
    // Animations Routers
    {
      type: 'Router', name: 'Battlebacks2ImagesRouter',
      deps: [ 'Battlebacks1ImagesRepository' ],
      config: { adapter: 'Rest', baseUrl: '/images/battlebacks2' }
    },
  ];
  
}
