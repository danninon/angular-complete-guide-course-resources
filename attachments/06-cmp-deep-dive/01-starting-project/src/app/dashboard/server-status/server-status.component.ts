import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus:'online' | 'offline' | 'unknown' = 'offline';

  constructor(){
    setInterval(()=> {
      console.log('Checking server status...');
      const randResult = Math.random();
      console.log(randResult);
      if (randResult > 0.5){
        this.currentStatus = 'online';
      }else{
        this.currentStatus = randResult < 0.3 ? 'unknown' : 'offline';
      }
    }, 5000);
  }
}
