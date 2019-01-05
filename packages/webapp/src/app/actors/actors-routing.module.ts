import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorsDetailComponent } from './components/actors-detail/actors-detail.component';
import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { ActorsIndexPageComponent } from './pages/index-page.component';

const actorsRoutes: Routes = [
  { path: '',  component: ActorsIndexPageComponent },
  { path: 'list',  component: ActorsListComponent },
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
