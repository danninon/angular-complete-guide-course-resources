import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../interfaces/task.model';

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

  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();
  enteredTitle = ''
  enteredSummary=''
  enteredDate=''

  onSubmit() {
      console.log('Form Submitted');
      
      this.addTask.emit({title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate});
  }

  onCancel(){
    this.cancel.emit();
  }
}
