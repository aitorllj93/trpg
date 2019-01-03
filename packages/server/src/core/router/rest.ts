
    
import { Router, Request, Response } from 'express';
import { Repository, Entity } from '../repository';

export const RestRouter = <Schema extends Entity = Entity>(
  repository: Repository<Schema>
) => {

  const router = Router();

  router.get('/', async (request: Request, response: Response) => {
    
    const data = await repository.find();

    response.send(data);
  });

  router.get('/count', async (request: Request, response: Response) => {

    const data = await repository.count();

    response.send(data);
  });
  
  router.get('/:id', async (request: Request, response: Response) => {
    
    console.log(request.params.id);
    
    const data = await repository.findById(request.params.id);

    response.send(data);
  });
  
  
  router.post('/', async (request: Request, response: Response) => {
    response.send('Not implemented');
  });
  
  
  router.put('/:id', async (request: Request, response: Response) => {
    response.send('Not implemented');
  });
  
  
  router.patch('/:id', async (request: Request, response: Response) => {
    response.send('Not implemented');
  });
  
  
  router.delete('/:id', async (request: Request, response: Response) => {
    response.send('Not implemented');
  });
  
  return router;
}