import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval = signal(0);
  num = 0;
  doubleInterval = computed(()=>this.interval()*2);
  Observable: any
  constructor(){
    // effect(()=>{
    //   console.log(`Clicked Button: ${this.clickCount()} times.`);
    // })

    // toObservable(this.clickCount);
  }
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscription = this.clickCount$.subscribe({
      next:(val)=>`Clicked Button: ${this.clickCount()} times.`
    })
    // setInterval(()=>{
    //   // this.num.update(prev=> prev+1);
    //   this.num = this.num +1;
    // })
  
  //   const subscription = interval(5000)
  //     .pipe(map((val) => 2 * val))
  //     .subscribe({
  //       next: (val) => console.log(val),
  //       // complete: () => console.log('COMPLETE: completed'),
  //       // error: () => console.log('ERROR: theres an issue')
  //     });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  OnClick(){
    this.clickCount.update((prevcount)=>prevcount=prevcount+1);
    // console.log(this.clickCount());
  }
}
