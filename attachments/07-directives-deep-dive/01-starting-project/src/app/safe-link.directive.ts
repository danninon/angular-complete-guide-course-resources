import { Directive } from "@angular/core";

//selector: any anchor element that has the appSafeLink attribute on it
@Directive({
    selector: 'a[appSafeLink]',
    standalone: true
})
export class SafeLinkDirective{
    constructor() {
        console.log('SafeLinkDirective is active');
    }
}