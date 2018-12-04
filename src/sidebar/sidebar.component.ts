import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TaskService} from '../task/task.service';
import {debounceTime, distinctUntilChanged, startWith} from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
    public autoCompleteVal = new FormControl();
    public selectCompleteVal = new FormControl();
    public menuItems = [
        {path: '/task-list', title: 'Task List', icon: 'list', class: ''},
        {path: '/task-add', title: 'Add task', icon: 'add', class: ''},
    ];

    constructor(private taskService: TaskService) {
    }

    public ngOnInit() {
        this.autoCompleteVal.valueChanges.pipe(
            // wait 500ms after each keystroke before considering the term
            debounceTime(500),

            // ignore new title if same as previous title
            distinctUntilChanged(),
            startWith('')).subscribe(
            (searchVal) => {
                console.log('searchVal', searchVal);
                this.taskService.emitSearch(searchVal)
            });
    }

}
