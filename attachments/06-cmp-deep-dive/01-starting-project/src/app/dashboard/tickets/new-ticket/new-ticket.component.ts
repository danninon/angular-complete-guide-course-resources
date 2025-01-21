import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit {
  twoWayBindingTitle = ''
  twoWayBindingText = ''

  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string, text: string}>();

  // here its guranteed that the native elements had been created.
  ngAfterViewInit(): void {
   console.log('AfterViewInit');
  //  console.log('this.form().nativeElement', this.form().nativeElement);
  }

  onSubmit(title: string, text: string) {
    // console.log('Form submitted!');
    // const enteredTitle = titleElement.value;
    console.log('titleInput.value:', title);
    console.log('textInput.value:', text);
    // console.dir(titleElement);
    // console.dir(textElement);
    // this.add.emit({title, text});
    this.add.emit({title:this.twoWayBindingTitle, text:this.twoWayBindingText});
    // this.form?.nativeElement.reset();
    // this.form().nativeElement.reset();
    this.twoWayBindingText ='';
    this.twoWayBindingTitle='';
  }
}
