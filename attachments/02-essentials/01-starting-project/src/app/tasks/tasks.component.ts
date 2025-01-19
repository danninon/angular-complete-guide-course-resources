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
  tasks = dummyTasks;
  public showForm:boolean = false;

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }


  toggleForm() {
      this.showForm = !this.showForm;
  }

  get selectedUserTasks() {
    return this.tasksService.getTasks(this.userId);
    // return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task)=> task.id === id);
  }

  onTaskAdded(taskData: NewTaskData){
    this.tasksService.addTask(taskData, this.userId);
    // this.tasks.unshift({
    //   id: Math.random().toString(),
    //   userId: this.userId,
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date
    // });
    this.toggleForm();
  }

  onCancelForm(){
    this.toggleForm();
  }
}
