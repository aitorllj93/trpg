import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Actor } from '@trpg/models/src/actor';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-list',
  template: `
  <ul>
    <ng-container *ngIf="actors$ | async as actors">
      <li *ngFor="let actor of actors">
        {{ actor.name }} {{ actor.nickname }}
        <pre>
          <code>{{ actor | json }}</code>
        </pre>
      </li>
    </ng-container>
  </ul>
  `
})
export class ActorsListComponent implements OnInit {

  actors$: Observable<Actor[]>;

  constructor(
    private service: ActorsService
  ) { }

  ngOnInit() {
    this.actors$ = this.service.find();
  }

}
