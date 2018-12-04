import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TaskModule} from '../task/task.module';
import {MaterialModule} from '../common/modules/material/material.module';


import {SidebarComponent} from '../sidebar/sidebar.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

        TaskModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
