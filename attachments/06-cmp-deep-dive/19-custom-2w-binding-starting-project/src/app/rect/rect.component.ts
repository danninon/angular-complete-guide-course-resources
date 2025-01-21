import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({required:true}) size!:{width:string,height:string};
  // @Output() sizeChange = new EventEmitter<{width:string,height:string}>(); //this variable has the prefix of the input variable
  
  size = model.required<{width:string, height:string}>();

  onReset() {
    this.size.set({width: '555', height: '333'});
    // this.sizeChange.emit({
    //   width:'222',
    //   height: '333'
    // });
    // this.size = {}
    // ...
  }
}
