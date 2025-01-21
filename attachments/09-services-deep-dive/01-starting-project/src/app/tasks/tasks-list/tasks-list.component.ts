import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService);
  
  private selectedFilter = signal<string>('all');
  // this.tasksService.getTasks();
  tasks = computed(() => {
    const allTasks = this.tasksService.getTasks()();
    const selectedFilter = this.selectedFilter();
    let retVal: Task[];
    if (selectedFilter === 'all'){
      retVal = allTasks;
    }else if (selectedFilter === 'open'){
      retVal = allTasks.filter(task=> task.status === 'OPEN')
    }else if (selectedFilter === 'in-progress'){
      retVal = allTasks.filter(task=> task.status === 'IN_PROGRESS');
    }else{
      retVal = allTasks.filter(task=> task.status === 'DONE');
    }
    return retVal;
  })
  
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
