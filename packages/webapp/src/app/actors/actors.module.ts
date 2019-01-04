import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsDetailComponent } from './actors-detail/actors-detail.component';
import { ActorsListComponent } from './actors-list/actors-list.component';

import { ActorsRoutingModule } from './actors-routing.module';

@NgModule({
  declarations: [ActorsDetailComponent, ActorsListComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
