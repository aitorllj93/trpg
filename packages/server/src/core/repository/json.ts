
import { readFile, writeFile } from 'jsonfile';

import { Repository, Entity } from './interface';

export class JsonAdapter {
  constructor(private path: string) {}

  async read() {
    const content = await readFile(this.path, 'utf8');

    return JSON.parse(content);
  }

  async write(content: any) {
    return writeFile(this.path, content);
  }
}

export class JsonRepository<Schema extends Entity = Entity> implements Repository<Schema> {

  adapter: JsonAdapter;
  database: JsonAdapter;

  constructor(
    private path: string
  ) {
    this.adapter = new JsonAdapter(path);
  }

  async load() {
    this.database =this.adapter;

    await this.database.read();
  }

  async count() {
    const content = await this.database.read();

    return Object.keys(content).length;
  }

  async find(
    filter = (element: Schema) => element,
    order = 'id',
    limit = 5,
    offset = 0
  ) {
    const content = await this.database.read();

    return [
      filter(content)
    ];
  }

  async findById(
    id: string
  ) {

    const content = await this.database.read();

    return content.id === id ? content : null;
  }
}