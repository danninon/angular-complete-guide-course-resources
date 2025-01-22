import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  //
  get getTasks(){
    return this.tasks.asReadonly();
  }

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('Added task with the title: ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus){
    this.tasks.update((oldTasks)=> oldTasks.map((task)=> task.id === taskId ? {...task, status: newStatus} : task));
    this.loggingService.log('Change task status to: ' + newStatus);
  }
}