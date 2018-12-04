import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaskRoutingModule} from './task-routing.module';
import {ListComponent} from './list/list.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {EditTaskComponent} from './edit-task/edit-task.component';
import {ListItemComponent} from './list-item/list-item.component';
import {MaterialModule} from '../common/modules/material/material.module';
import {TaskService} from './task.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InMemoryDataService} from '../in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {FormatStringPipe} from '../common/pipes/format-string.pipe';
import {PagerService} from '../common/services/pager/pager.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TaskRoutingModule,
        MaterialModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        ),
    ],
    declarations: [ListComponent, AddTaskComponent, EditTaskComponent, ListItemComponent, FormatStringPipe],
    exports: [],
    providers: [TaskService, PagerService]
})
export class TaskModule {
}
