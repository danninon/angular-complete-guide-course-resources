import { Directive, ElementRef, inject, input } from '@angular/core';

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
  queryParam = input<string>('myapp', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const isWantsToLeave = window.confirm('Do you want to leave the app?');
    if (isWantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    } else {
      event.preventDefault();
    }
  }
}
