import { Component, Input } from '@angular/core';

@Component({
  selector: 'tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
   @Input() name?: string;
}
