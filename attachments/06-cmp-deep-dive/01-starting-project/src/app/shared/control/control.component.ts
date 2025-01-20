import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
   encapsulation: ViewEncapsulation.None, //because were using ng content in the control component and want the button css to work on it
  host: { //because we changed encapsulation to none, we need to add this to the host to make the button css work on the control component
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>();
}
