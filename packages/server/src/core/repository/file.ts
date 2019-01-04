
import { readFile, writeFile } from 'fs-extra';

import { Repository, Entity } from './interface';

export class FileAdapter {
  constructor(private path: string) {}

  async read(id: string) {
    return readFile(`${this.path}/${id}`);
  }

  async write(id: string, content: any) {
    return writeFile(`${this.path}/${id}`, content);
  }
}

export class FileRepository<Schema extends Entity = Entity> implements Repository<Schema> {

  adapter: FileAdapter;
  database: FileAdapter;

  constructor(
    private path: string
  ) {
    this.adapter = new FileAdapter(path);
  }

  async load() {
    this.database =this.adapter;;
  }

  async count() {
    throw new Error('Not implemented');
    return 0;
  }

  async find(
    filter = (element: Schema) => element,
    order = 'id',
    limit = 5,
    offset = 0
  ): Promise<Array<Schema>> {
    throw new Error('Not implemented');
    return [];
    /**
    const content = await this.database.read();

    return [
      filter(content)
    ];
     */
  }

  async findById(
    id: string
  ): Promise<any> {
    return this.database.read(id);
  }
}