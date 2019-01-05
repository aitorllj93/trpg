import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsDetailComponent } from './components/actors-detail/actors-detail.component';
import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { ActorsIndexPageComponent } from './pages/index-page.component';

import { ActorsRoutingModule } from './actors-routing.module';

import { AngularSplitModule } from 'angular-split';

import {
  MdcCardModule
} from '@angular-mdc/web';

@NgModule({
  declarations: [ActorsDetailComponent, ActorsListComponent, ActorsIndexPageComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    AngularSplitModule,
    MdcCardModule
  ]
})
export class ActorsModule { }
