import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  submitForm() {
      console.log('Form Submitted');
  }
}
