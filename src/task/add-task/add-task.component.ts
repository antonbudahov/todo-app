import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../task.service';
import {UrgencyMap, Task} from '../model/task.interface';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

    isLoaded: Boolean = false;
    task: Task;
    urgencyList: any[] = UrgencyMap;
    @ViewChild('taskForm') toForm: NgForm;

    constructor(private taskService: TaskService,
                private rout: Router) {
    }

    ngOnInit() {
        this.isLoaded = true;
        this.task = {
            id: Date.now(),
            title: '',
            description: '',
            status: false,
            urgency: 0,
            finishTo: new Date(Date.now()),
            finishToStr: ''
        };
    }

    addTask(): void {
        this.taskService.add(this.task)
            .subscribe(() => this.rout.navigate(['task-list']));
    }
}
