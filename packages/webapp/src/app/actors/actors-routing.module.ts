import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorsDetailComponent } from './actors-detail/actors-detail.component';

const actorsRoutes: Routes = [
//  { path: 'actors',  component: ActorsListComponent },
  { path: ':id', component: ActorsDetailComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(actorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ActorsRoutingModule { }
