import { dummyTasks } from "../dummy-tasks";
import { NewTaskData, Task } from "../interfaces/task.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = dummyTasks;

  constructor() {}

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
        id: Math.random().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
      });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
}