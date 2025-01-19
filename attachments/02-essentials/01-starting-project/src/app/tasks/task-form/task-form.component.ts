import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  enteredTitle = ''
  enteredSummary=''
  enteredDate=''

  submitForm() {
      console.log('Form Submitted');
  }

  onCancel(){
    this.cancel.emit();
  }
}
