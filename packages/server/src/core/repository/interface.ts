

export interface Entity {
  id: string;
}

export interface Repository<Schema = Entity> {

  load(): Promise<void>;

  count(
    filter?: (element: Schema) => Schema|boolean,
  ): Promise<number>;
  
  find(
    filter?: (element: Schema) => Schema|boolean,
    order?: string,
    limit?: number,
    offset?: number
  ): Promise<Array<Schema>>;

  findById(
    id: string,
  ): Promise<Schema>;

}