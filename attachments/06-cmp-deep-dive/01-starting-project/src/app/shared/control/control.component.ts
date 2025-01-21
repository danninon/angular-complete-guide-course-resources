import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //because were using ng content in the control component and want the button css to work on it
  host: {
    //because we changed encapsulation to none, we need to add this to the host to make the button css work on the control component
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  private referenceToHostElement = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

    constructor(){
      afterRender(()=>{console.log('afterRender')});
      afterNextRender(()=>{console.log('afterNextRender')});
    }
 
    //its safe to check content here because we know that the content has been initialized
  ngAfterContentInit(): void {
    // console.log('this.control()', this.control());
  }
  onClick() {
    // console.log('Clicked'); //this is another way to listen to events
    // console.log(this.referenceToHostElement); //this is how you see what is known about the element from the DOM, this is a reference to the element.
    // console.log('this.control', this.control()); //this is how you see what is known about the element from the DOM, this is a reference to the element.
  }
}
