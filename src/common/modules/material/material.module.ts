import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatSlideToggleModule, MatChipsModule,
    MatOptionModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule, MatProgressBarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatCheckboxModule,
        MatOptionModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatCheckboxModule,
        MatOptionModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatProgressBarModule
    ],
    declarations: []
})
export class MaterialModule {
}
