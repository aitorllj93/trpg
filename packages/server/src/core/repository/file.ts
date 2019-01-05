
import { readFile, writeFile, readdir } from 'fs-extra';

import { Repository, Entity } from './interface';

export class FileAdapter {
  constructor(private path: string) {}

  async read(id: string) {
    return readFile(`${this.path}/${id}`);
  }

  async write(id: string, content: any) {
    return writeFile(`${this.path}/${id}`, content);
  }

  async readDir() {
    return readdir(this.path);
  }

  async count() {
    const files = await readdir(this.path);
    
    return files.length;
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
    this.database =this.adapter;
  }

  async count() {
    return this.database.count();
    return 0;
  }

  async find(
    filter = (element: Schema) => element,
    order = 'id',
    limit = 5,
    offset = 0
  ): Promise<Array<Schema>> {
    const files = await this.adapter.readDir();
    
    return files.map(file => ({ id: file } as Schema));
  }

  async findById(
    id: string
  ): Promise<any> {
    return this.database.read(id);
  }
}