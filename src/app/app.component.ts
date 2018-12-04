import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'Todo App';
    over = 'side';

    screenWidth: number;
    @ViewChild('mainNav') public mainNav;

    constructor() {
        // set screenWidth on page load
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            // set screenWidth on screen size change
            this.screenWidth = window.innerWidth;
           if (!this.mainNav.opened &&  this.screenWidth > 1024) {
               this.mainNav.open();
           }
        };
    }
}
