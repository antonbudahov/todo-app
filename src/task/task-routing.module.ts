import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {EditTaskComponent} from './edit-task/edit-task.component';


const routes: Routes = [
  {path: 'task-list', component: ListComponent},
  {path: 'task-add', component: AddTaskComponent},
  {path: 'task/:id', component: EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
