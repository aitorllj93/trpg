import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { switchMap, tap, filter, distinctUntilChanged } from 'rxjs/operators';

import { Actor } from '@trpg/models/src/actor';

import { ActorsService } from '../../actors.service';

@Component({
  selector: 'app-actors-detail',
  template: `
    <ng-container *ngIf="actor$ | async as actor">
      <mdc-card class="demo-card">
        <mdc-card-primary-action>
          <mdc-card-media class="demo-card__media--16-9"
            [ngStyle]="getActorFace(actor)" wide>
          </mdc-card-media>
          <div class="demo-card__primary">
            <h2 class="demo-card__title" style="padding-left: 20px;" mdcHeadline6>
              {{ actor.name }} {{ actor.nickname }} #{{ actor.id }}
            </h2>
          </div>
          <div class="demo-card__secondary" style="padding: 20px;" mdcBody2>
            <p>Niveles: inicial {{ actor.initialLevel }} max {{ actor.maxLevel }}</p>
            <p>Notas: {{ actor.note }}</p>
            <p>Perfil: {{ actor.profile }}</p>
            <p>Battler: {{ actor.battlerName }}</p>
            <p>Clase: {{ actor.classId }}</p>
            <p>Equipos: {{ actor.equips | json }}</p>
            <p>Traits: {{ actor.traits | json }}</p>
            <div [ngStyle]="getActorCharacter(actor)"></div>
            <!-- pre>
              <code>{{ actor | json }}</code>
            </pre -->
          </div>
        </mdc-card-primary-action>
      </mdc-card>
  </ng-container>
  `
})
export class ActorsDetailComponent implements OnInit {

  @Output() selectedIdChange = new EventEmitter<string>();
  @Input()
    set selectedId (value: string) {
      this._selectedId = value;
      this.selectedIdChange.emit(value);
    }
    get selectedId (): string {
      return this._selectedId;
    }
  private _selectedId = '';

  initialized = false;

  actor$ = new Subject<Actor>();

  private subscriptions: Array<Subscription> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ActorsService
  ) { }

  ngOnInit() {

    this.subscriptions = [
      this.selectedIdChange.pipe(
        distinctUntilChanged(),
        filter(
          value => value ? true : false
        ),
        switchMap(value => this.service.findById(value)),
        tap(
          (actor) => this.actor$.next(actor)
        )
      ).subscribe(),
      this.route.paramMap.pipe(
        tap(
          params => params.get('id') ? this.selectedId = params.get('id') : null
        )
      ).subscribe()
    ];

    if (this._selectedId) {
      this.selectedIdChange.emit(this._selectedId);
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getActorCharacter(actor: any) {
    return this.service.getActorCharacter(actor);
  }

  private getActorFace(actor: any) {
    return this.service.getActorFace(actor);
  }

  private getActorBattler(actor: any) {
    return this.service.getActorBattler(actor);
  }

}
