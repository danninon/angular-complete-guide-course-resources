import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { TaskFormComponent } from './task-form/task-form.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string;
  tasks = dummyTasks;
  public showForm:boolean = false;


  toggleForm() {
      this.showForm = !this.showForm;
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task)=> task.id === id);
  }

  onCancelForm(){
    this.toggleForm();
  }
}
