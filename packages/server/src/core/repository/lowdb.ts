
import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

import { AdapterAsync, LowdbAsync } from 'lowdb';

import { Repository, Entity } from './interface';

export class LowDBRepository<Schema extends Entity = Entity> implements Repository<Schema> {

  adapter: AdapterAsync;
  database: LowdbAsync<Array<Schema>>

  constructor(
    path: string
  ) {
    this.adapter = new FileAsync(path);
  }

  async load() {
    this.database = await low<low.AdapterAsync<Array<Schema>>>(this.adapter);

    await this.database.read();
  }

  async count() {
    return this.database
      .filter((element) => element)
      .size()
      .value();
  }

  async find(
    filter = (element: Schema) => element,
    order = 'id',
    limit = 5,
    offset = 0
  ): Promise<Array<Schema>> {

    const data = this.database
      .filter(filter)
      .sortBy(order)
      // .rest(offset)
      .value() as Array<Schema>;

    return data;// .slice(0, limit);
  }



  async findById(
    id: string,
    filter = (element: Schema) => element && element.id.toString() === id.toString() ? element : null
  ): Promise<Schema>  {

    const content = await this.find(filter);

    return content[0];
  }

}