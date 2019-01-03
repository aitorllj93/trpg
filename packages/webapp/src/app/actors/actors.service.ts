import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  findById(selectedId: string): any {
    return this.httpClient.get(`${this.baseUrl}/${selectedId}`);
  }
}
