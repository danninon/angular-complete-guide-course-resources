import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../interfaces/task.model';
import { TasksService } from '../tasks.serivce';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  // should have an event emitter to emit the form data
  // should have a method to handle form submission
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService: TasksService = inject(TasksService);

  enteredTitle = ''
  enteredSummary=''
  enteredDate=''

  onSubmit() {
      console.log('Form Submitted');
      this.tasksService.addTask(
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
           date: this.enteredDate},
            this.userId);
      this.close.emit();
  }

  onCancel(){
    console.log('Form Cancelled');
    this.close.emit();
  }
}
