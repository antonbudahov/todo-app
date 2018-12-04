import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TaskService} from '../task.service';
import {NgForm} from '@angular/forms';
import {UrgencyMap, Task} from '../model/task.interface';
// import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.sass']
})
export class EditTaskComponent implements OnInit {
  task: Task;
  isLoaded: Boolean = false;
  urgencyList: any[] = UrgencyMap;
  @ViewChild('taskForm') toForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getTaskId();
  }

  public getTaskId() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(id)
    .subscribe(task => this.task = task);
      console.log(this.task);
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.taskService.getTaskById(+params.get('id')))
    //   .subscribe(task => this.task = task);
    this.isLoaded = true;
    console.log(this.task);
  }

  public save(): void {
    console.log(this.task);
    this.taskService.update(this.task)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
