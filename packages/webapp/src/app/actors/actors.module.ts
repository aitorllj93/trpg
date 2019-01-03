import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsDetailComponent } from './actors-detail/actors-detail.component';

import { ActorsRoutingModule } from './actors-routing.module';

@NgModule({
  declarations: [ActorsDetailComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
