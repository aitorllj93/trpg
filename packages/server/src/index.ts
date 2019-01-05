
import { LowDBRepository, FileRepository } from './core/repository';
import { RestRouter } from './core/router/rest';

import  express from 'express';
import  cors from 'cors';

import { modules } from './config';

const app = express();

app.use(cors())

const port = process.env.PORT || 3000;

export const types: { [key: string]: any } = {
  
  Repository: async (module: any, _container: any) => {

    const repositoryAdapters: {
      [key: string]: {
        new(...args: any[]): any;
      }
    } = {
      default: LowDBRepository,
      LowDB: LowDBRepository,
      File: FileRepository
    }

    const builder = repositoryAdapters[module.config.adapter || 'default'];

    const instance = new builder(module.config.connection);

    await instance.load();

    return instance;
  },
  
  Router: async (module: any, container: any) => 
    app.use(
      module.config.baseUrl, 
      RestRouter(
        module.deps.map((dep: any) =>  {
          if (!container[dep]) {
            throw new Error(`module ${dep} not found`);
          }

          return container[dep].instance;
        }
        )[0]
      )
    )
};

(async () => {

  const container = await modules.reduce(
    async (result, smodule) => {
      const container = await result;

      const instance = await types[smodule.type](smodule, container);
      
      return Object.assign(container, {
        [smodule.name]: {
          ...module,
          instance
        }
      });
    },
    Promise.resolve({})
  );
  
  app.listen(port, () => console.log(`Server listening at port ${port}`));

})();