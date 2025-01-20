import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title:string, text:string) {
    // console.log('Form submitted!');
    // const enteredTitle = titleElement.value;
    console.log("titleInput.value:", title);
    console.log("textInput.value:", text);
    // console.dir(titleElement);

    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();

  }
}
