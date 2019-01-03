import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'actors',
    loadChildren: './actors/actors.module#ActorsModule'
  },
  { path: '',   redirectTo: '/actors/1', pathMatch: 'full' },
  { path: '**', redirectTo: '/actors/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
