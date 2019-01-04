import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'actors',
    loadChildren: './actors/actors.module#ActorsModule'
  },
  { path: '',   redirectTo: '/actors', pathMatch: 'full' },
  { path: '**', redirectTo: '/actors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
