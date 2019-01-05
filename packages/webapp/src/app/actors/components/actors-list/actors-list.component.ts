import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Actor } from '@trpg/models/src/actor';
import { ActorsService } from '../../actors.service';

@Component({
  selector: 'app-actors-list',
  template: `
    <ng-container *ngIf="actors$ | async as actors">
      <mdc-card style="margin: 2px;" class="demo-card"
        *ngFor="let actor of actors"
        (click)="actorClick.emit(actor)">
        <mdc-card-primary-action>
          <mdc-card-media class="demo-card__media--16-9"
            [ngStyle]="getActorFace(actor)" wide>
          </mdc-card-media>
          <div class="demo-card__primary">
            <h2 class="demo-card__title" mdcHeadline6>{{ actor.name }} {{ actor.nickname }}</h2>
          </div>
          <div class="demo-card__secondary" mdcBody2>
          </div>
        </mdc-card-primary-action>
      </mdc-card>
    </ng-container>
  `,
  styles: [
    `

      .json-preview {
        max-height: 100px;
        overflow: auto;
      }

      .gallery {}

      .picture {
        display: inline-block;
      }

      .actor-face {

      }

      .actor-face {

      }
    `
  ]
})
export class ActorsListComponent implements OnInit {

  actors$: Observable<Actor[]>;

  @Output() actorClick = new EventEmitter<Actor>();

  constructor(
    private service: ActorsService
  ) { }

  ngOnInit() {
    this.actors$ = this.service.find();
  }

  private getActorCharacter(actor: any) {
    return this.service.getActorCharacter(actor);
  }

  private getActorFace(actor: any) {
    return this.service.getActorFace(actor);
  }

}
