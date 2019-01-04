import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ActorsService } from '../actors.service';


@Component({
  selector: 'app-actors-detail',
  template: `
  <ng-container *ngIf="actor$ | async as actor">
    {{ actor.name }} {{ actor.nickname }}
    <pre>
      <code>{{ actor | json }}</code>
    </pre>
  </ng-container>
  `
})
export class ActorsDetailComponent implements OnInit {

  selectedId = '';
  actor$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ActorsService
  ) { }

  ngOnInit() {
    this.actor$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = params.get('id');

        return this.service.findById(this.selectedId);
      })
    );
  }

}
