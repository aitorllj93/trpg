import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Actor } from '@trpg/models/src/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  get path() {
    return 'actors';
  }

  get baseUrl() {
    return `${environment.apiUrl}/${this.path}`;
  }

  constructor (
    private httpClient: HttpClient
  ) {}

  find(filter?: any): any {
    return this.httpClient.get<Promise<Actor>>(`${this.baseUrl}`);
  }

  findById(selectedId: string): any {
    return this.httpClient.get<Actor>(`${this.baseUrl}/${selectedId}`);
  }
}
