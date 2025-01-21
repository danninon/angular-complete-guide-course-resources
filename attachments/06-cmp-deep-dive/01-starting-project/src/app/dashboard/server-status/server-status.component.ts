import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("IN 'ngOnInit'");
    // this.interval = setInterval(()=> {
    const interval = setInterval(() => {
      // console.log('Checking server status...');
      const randResult = Math.random();
      // console.log(randResult);
      if (randResult > 0.5) {
        this.currentStatus.set('online');
      } else {
        this.currentStatus.set(randResult < 0.3 ? 'unknown' : 'offline');
      }
    }, 5000);
    // console.log("typeof this.interval ", typeof this.interval);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

  ngAfterViewInit() {
    console.log("IN 'ngAfterViewInit'");
  }

  constructor() {
    effect(() => {
      console.log('in effect');
      console.log(this.currentStatus());
      console.log('exiting effect');
    });

    console.log('in ctor');
    console.log(this.currentStatus());
    console.log('exiting ctor');
  }
}
