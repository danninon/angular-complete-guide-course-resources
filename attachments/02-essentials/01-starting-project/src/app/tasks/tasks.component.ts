import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { TaskFormComponent } from './task-form/task-form.component';
import { NewTaskData } from '../interfaces/task.model';
import { TasksService } from './tasks.serivce';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  // tasks = dummyTasks;
  public showForm:boolean = false;

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  toggleForm() {
      this.showForm = !this.showForm;
  }

  get selectedUserTasks() {
    return this.tasksService.getTasks(this.userId);
  }

  onCloseForm(){
    this.showForm = false;
  }
}
