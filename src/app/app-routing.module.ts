import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '../not-found/not-found.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'task-list', pathMatch: 'full'},
  {path: '', component: AppComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
