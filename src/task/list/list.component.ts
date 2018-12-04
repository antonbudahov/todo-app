import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../model/task.interface';

import {PagerService} from '../../common/services/pager/pager.service';

@Component({
    selector: 'app-list-items',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
    tasks: Task[];
    filteredTask: Task[];
    // page config
    pager: any = {};
    pagedItems: any[];
    isLoaded: Boolean = false;

    @Output() remove = new EventEmitter(false);

    constructor(private taskService: TaskService,
                private pagerService: PagerService) {
    }

    ngOnInit() {
        this.getTasks();
    }

    public getTasks() {
        this.taskService.getAllTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
                this.isLoaded = true;
                // Subscribe on new search event
                this.taskService.newSearch.subscribe((searchVal) => {

                    this.filteredTask = this._filter(searchVal);
                    console.log('filteredTask', this._filter(searchVal));
                    // initialize to page 1
                    this.setPage(1);
                    // TODO issue when array empty
                    if (searchVal == '' && this.pagedItems.length === 0) {
                        this.pagedItems =  this.filteredTask.slice(0,5)
                        this.pager = this.pagerService.getPager(this.filteredTask.length, 1);
                    }
                });
            });
    }

    public setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.filteredTask.length, page);
        // get current page of items

        this.pagedItems = this.filteredTask.slice(this.pager.startIndex, this.pager.endIndex + 1);

        console.log('pagedItems',  this.pagedItems);
    }

    public deleteTask(task: Task): void {
        this.taskService.delete(task).subscribe(() => {
            this.filteredTask = this.filteredTask.filter(t => t !== task);
        });
    }

    public identify(index) {
        return index;
    }

    private _filter(value: string): Task[] {
        const filterValue = value.toLowerCase();
        return this.tasks.filter(option => option.title.toLowerCase().includes(filterValue));
    }

}
