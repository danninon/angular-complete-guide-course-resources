import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './app-task.component.html',
  styleUrl: './app-task.component.css'
})
export class AppTaskComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
}
