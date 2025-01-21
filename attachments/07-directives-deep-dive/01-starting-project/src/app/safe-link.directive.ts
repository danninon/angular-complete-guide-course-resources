import { Directive } from '@angular/core';

//selector: any anchor element that has the appSafeLink attribute on it
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    class: 'control',
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active');
  }

  onConfirmLeavePage(event: MouseEvent){
    const isWantsToLeave = window.confirm('Do you want to leave the app?');
    if (isWantsToLeave){
        return;
    }else{
       event.preventDefault();
    }
  }
}
